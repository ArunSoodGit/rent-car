import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: firebase.User;

  constructor(public service: LoginService) { }

  ngOnInit() {
    this.service.getLoggedInUser();
  }
  loginGoogle() {
    console.log('Login...');
    this.service.loginG();
  }
  logout() {
    this.service.logout();
  }

}
