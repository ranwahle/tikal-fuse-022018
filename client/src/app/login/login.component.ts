import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private authService: AuthenticationService, private router: Router) {
  }


  ngOnInit() {
  }

  async login() {
    await this.authService.login(this.username, this.password);

    this.router.navigate(['/quiz']);
  }

}
