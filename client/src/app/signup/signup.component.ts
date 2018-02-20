import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  username: string;
  password: string;
  ngOnInit() {
  }

  async signUp() {
  const result = await  this.authService.signupUser(this.username, this.password);
  console.log('signup result', result);
  }

}
