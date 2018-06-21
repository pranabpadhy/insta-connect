import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MdcTextField } from '@angular-mdc/web';
import * as crypto from 'crypto-js';

import { UiValidation } from '../../app-common/ui-validation';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: FormGroup;
  tooltip_msg: string;
  @ViewChild('email') email: MdcTextField;
  @ViewChild('password') password: MdcTextField;

  constructor() {
    this.tooltip_msg = 'Show Password';
    this.createForm();
  }

  ngOnInit() {}

  changeTooltipMsg() {
    if (this.tooltip_msg === 'Show Password') {
      this.tooltip_msg = 'Hide Password';
    } else {
      this.tooltip_msg = 'Show Password';
    }
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
        this.email.setHelperTextContent('Invalid Email');
        this.password.setHelperTextContent(null);
        return false;
      }
      this.email.setHelperTextContent('Enter a valid Email');
      this.password.setHelperTextContent(null);
      return false;
    }
    if (this.form.controls.password.errors) {
      this.email.setHelperTextContent(null);
      this.password.setHelperTextContent('Enter Password');
      return false;
    }
    this.email.setHelperTextContent(null);
    this.password.setHelperTextContent(null);
    return true;
  }

  signin() {
    if (this.validate()) {
      const hash = crypto.SHA256(this.form.value.password);
      alert('valid');
      this.form.reset();
    } else {
      alert('invalid');
    }
  }

  googleSignin() {
    alert('Not implemented yet. Please signup');
  }

}
