import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { UiValidation } from '../../app-common/ui-validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, UiValidation.isEmailValid()]),
      name: new FormControl(null, Validators.required),
      mobile: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, UiValidation.isPasswordValid()]),
      cnfpassword: new FormControl(null, [Validators.required, UiValidation.isPasswordValid()])
    });
  }

  validate() {

  }

  signup() {

  }

}
