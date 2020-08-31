import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private authAf: AngularFireAuth) { }

  signInWithEmail(email: string, password: string): Promise<any> {
    return this.authAf.signInWithEmailAndPassword(email, password);
  }

  getLoggedInUser(): Observable<User> {
    return this.authAf.user;
  }

  signOut(): Promise<void> {
    return this.authAf.signOut();
  }
}
