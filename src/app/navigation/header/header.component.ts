import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: firebase.User;

  @Output() public sidenavToggle = new EventEmitter();

    constructor( private loginService: LoginService) { }



  ngOnInit() {
    this.loginService.getLoggedInUser()
      .subscribe(user => {
        this.user = user;
      });
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();

}
logout() {
  this.loginService.logout();
}
}
