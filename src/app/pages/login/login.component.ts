import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AngularFireAuth } from '@angular/fire/auth';

class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new CustomErrorStateMatcher();

  constructor(private formBuilder: FormBuilder,
              private authAf: AngularFireAuth) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: this.emailFormControl,
      password: this.passwordFormControl
    });
  }

  loginWithEmail(): void {
    this.authAf.signInWithEmailAndPassword(this.emailFormControl.value, this.passwordFormControl.value)
    .then(
      (succ) => {
        console.log(succ);
      }
    ).catch(
      (err) => {
        console.log(err);
      }
    )
  }

}
