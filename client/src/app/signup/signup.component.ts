import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  username: string;
  password: string;
  error: any;
  ngOnInit() {
  }

  async signUp() {
    try {
      const result = await  this.authService.signupUser(this.username, this.password);
      console.log('signup result', result);
      this.router.navigate(['/quiz']);

    }catch(err) {
      console.log('error', err);
      this.error = err.message;
    }

  }

}
