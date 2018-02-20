import {Injectable} from '@angular/core';
import {CognitoUser, CognitoUserPool} from "amazon-cognito-identity-js";
import {config} from './config/auth.config';
import {User} from './model/user.inerface';

@Injectable()
export class AuthenticationService {

  constructor() {
  }

  getCurrentUser(): User {
    const userPool = this.getUserPool();
    return this.mapToUser(userPool.getCurrentUser());
  }

  mapToUser(user: CognitoUser): User {
    console.log('user', user);
    return user ? {
      fullName: user.getUsername()
    } : null;
  }

  async signupUser(username: string, password: string) {
    const pull = this.getUserPool();

    return new Promise((resolve, reject) => {
      pull.signUp(username, password, [], null,
        (err, result)  => {
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
