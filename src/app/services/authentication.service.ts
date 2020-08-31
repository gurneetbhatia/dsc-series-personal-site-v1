import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private authAf: AngularFireAuth) { }

  signInWithEmail(email: string, password: string): Promise<any> {
    return this.authAf.signInWithEmailAndPassword(email, password);
  }
}
