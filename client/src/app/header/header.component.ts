import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.inerface';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private autheService: AuthenticationService) { }

  currentUser: User;

 async ngOnInit() {
    this.currentUser = await this.autheService.getCurrentUser();
  }

}
