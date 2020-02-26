import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {auth, User} from 'firebase';
import { Router } from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly authState$: Observable<User | null> = this.afAuth.authState;

  constructor( private afAuth: AngularFireAuth, public router: Router
  ) { }

  loginG() {
    console.log('Redirecting to Google login provider');
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
    this.router.navigate(['/home']);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }
  getLoggedInUser() {
    return this.afAuth.authState;
  }
  login(email: string, password: string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password);

  }
  register(email: string, password: string) {
    this.afAuth.auth.createUserWithEmailAndPassword(email, password);
    this.sendEmailVerification();
  }
  async sendEmailVerification() {
    await this.afAuth.auth.currentUser.sendEmailVerification();

  }
}
