import {Injectable} from '@angular/core';
import {AuthenticationDetails, CognitoUser, CognitoUserPool} from 'amazon-cognito-identity-js';
import {config} from './config/auth.config';
import {User} from './model/user.inerface';

@Injectable()
export class AuthenticationService {

  constructor() {
  }

  getCurrentUser(): Promise<User> {
    const userPool = this.getUserPool();
    return this.mapToUser(userPool.getCurrentUser());
  }

  async mapToUser(user: CognitoUser): Promise<User> {
    return new Promise<User>((resolve, reject) => {
        user.getSession((err, result) => {
        })
        user.getUserAttributes((err, result) => {
          if (err) {
            console.error(err, result);
            reject(err);
          } else {
            const foundAttribute: any = result.find(item => (item as any).Name === 'email');
            resolve({fullName: foundAttribute ? foundAttribute.Value.substring(0, foundAttribute.Value.indexOf('@')) : 'No mail'});
          }
        });


      }
    );

  }

  async login(username: string, password: string) {

    const user = new CognitoUser({Username: username, Pool: this.getUserPool()});
    const authenticationData = {Username: username, Password: password};
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    return new Promise((resolve, reject) =>
      user.authenticateUser(authenticationDetails, {
        onSuccess: result => {
          sessionStorage.setItem('cognito-access-token', result.getAccessToken().getJwtToken());
          resolve(result);
        },
        onFailure: err => reject(err)
      })
    );
  }

  async signupUser(username: string, password: string) {
    const pull = this.getUserPool();

    return new Promise((resolve, reject) => {
      pull.signUp(username, password, [], null,
        (err, result) => {
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        })
    });

  }

  private getUserPool() {
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });
    return userPool;
  }

}
