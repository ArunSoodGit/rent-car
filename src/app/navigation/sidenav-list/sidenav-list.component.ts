import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();

  @Output() public sidenavToggle = new EventEmitter();
  constructor(private loginService: LoginService) { }


  user: firebase.User;
  ngOnInit() {
    this.loginService.getLoggedInUser()
    .subscribe(user => {
      this.user = user;
    });
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();

  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();


  }
}
