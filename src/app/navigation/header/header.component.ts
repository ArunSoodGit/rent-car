import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LoginService } from 'src/app/login.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 test: Observable<string> ;
  user: firebase.User;
  @Output() public sidenavToggle = new EventEmitter();


  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.getLoggedInUser()
      .subscribe(user => {
        this.user = user;
      });
3
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();


  }
  logout() {
    this.loginService.logout();
  }
}
