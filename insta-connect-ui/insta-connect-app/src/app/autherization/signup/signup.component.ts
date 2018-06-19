import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { UiValidation } from '../../app-common/ui-validation';
import { ShowHidePasswordDirective } from '../show-hide-password/show-hide-password.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  visible: boolean;
  cnfvisible: boolean;

  @ViewChild(ShowHidePasswordDirective) showHidePassword: ShowHidePasswordDirective;

  constructor() {
    this.visible = false;
    this.cnfvisible = false;
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

  toggleShowPassword(event) {
    this.visible = !this.visible;
    if (this.visible) {
      this.showHidePassword.changeType('text');
    } else {
      this.showHidePassword.changeType('password');
    }
  }

  toggleShowCnfPassword() {
    this.cnfvisible = !this.cnfvisible;
    if (this.cnfvisible) {
      this.showHidePassword.changeType('text');
    } else {
      this.showHidePassword.changeType('password');
    }
  }

}
