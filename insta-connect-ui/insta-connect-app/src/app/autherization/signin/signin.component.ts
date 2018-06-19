import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as crypto from 'crypto-js';

import { UiValidation } from '../../app-common/ui-validation';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, UiValidation.isEmailValid()]),
      password: new FormControl(null, Validators.required)
    });
  }

  validate() {
    if (this.form.controls.email.errors) {
      if (this.form.controls.email.errors.invalidEmail) {
        alert('Invalid Email');
        return false;
      }
      alert('Enter a valid Email');
      return false;
    }
    if (this.form.controls.password.errors) {
      alert('Enter Password');
      return false;
    }
    return true;
  }

  signin() {
    if (this.validate()) {
      const hash = crypto.SHA256(this.form.value.password);
      alert(this.form.value.email + '\n' + hash);
      this.form.reset();
    }
  }

  googleSignin() {}

}
