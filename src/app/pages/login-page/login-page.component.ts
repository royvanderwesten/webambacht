import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { FormControl } from '@angular/forms';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'ba-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {

  public signUpForm: FormGroup;
  public signInForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {
    this.signUpForm = this.fb.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    this.signInForm = this.fb.group({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
  }

  submitSignUp() {
    if (this.signUpForm.valid) {
      // @ts-ignore
      const email = this.signUpForm.get('email').value;
      // @ts-ignore
      const password = this.signUpForm.get('password').value;

      this.authService.signUp(email, password).then((res) => {
        console.log('SUCCESS!', res);
      }).catch((err) => {
        console.log('ERROR!', err);
      })
    }
  }

  submitSignIn() {
    if (this.signInForm.valid) {
      // @ts-ignore
      const email = this.signInForm.get('email').value;
      // @ts-ignore
      const password = this.signInForm.get('password').value;

      this.authService.signIn(email, password).then((res) => {
        this.router.navigate(['/']);
      }).catch((err) => {
        console.log('ERROR!', err);
      })
    }
  }
}
