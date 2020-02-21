import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  user: firebase.User;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getLoggedInUser()
    .subscribe(user => {
      this.user = user;
    });
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
}
