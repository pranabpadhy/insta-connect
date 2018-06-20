import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

import { UiValidation } from '../../app-common/ui-validation';
import { IsdCodeList } from '../../app-common/country-isd-code-list';
import { MdcTextField } from '@angular-mdc/web';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  isdCodeList = IsdCodeList.list;
  error: any;

  @ViewChild('isdCode') isdCode: ElementRef;
  @ViewChild('email') email: MdcTextField;
  @ViewChild('name') name: MdcTextField;
  @ViewChild('password') password: MdcTextField;
  @ViewChild('cnfpassword') cnfpassword: MdcTextField;
  constructor(private render: Renderer2) {
    this.createForm();
  }

  ngOnInit() {
    this.error = {};
  }

  createForm() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, UiValidation.isEmailValid()]),
      name: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      mobile: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.minLength(10)]),
      password: new FormControl(null, [Validators.required, UiValidation.isPasswordValid()]),
      cnfpassword: new FormControl(null, [Validators.required, UiValidation.isPasswordValid()])
    });
  }

  validate() {
    if (this.form.controls.email.errors) {
      if (this.form.controls.email.errors.invalidEmail) {
        this.email.setHelperTextContent('Invalid Email');
        this.name.setHelperTextContent(null);
        this.password.setHelperTextContent(null);
        this.cnfpassword.setHelperTextContent(null);
        this.error = {};
        return false;
      }
      this.email.setHelperTextContent('Enter a valid Email');
      this.name.setHelperTextContent(null);
      this.password.setHelperTextContent(null);
      this.cnfpassword.setHelperTextContent(null);
      this.error = {};
    }
    if (this.form.controls.name.errors) {
      this.email.setHelperTextContent(null);
      this.name.setHelperTextContent('Name is required');
      this.password.setHelperTextContent(null);
      this.cnfpassword.setHelperTextContent(null);
      this.error = {};
      return false;
    }
    if (this.form.controls.country.errors) {
      this.email.setHelperTextContent(null);
      this.name.setHelperTextContent(null);
      this.password.setHelperTextContent(null);
      this.cnfpassword.setHelperTextContent(null);
      this.error = {country: 'Country is required'};
      return false;
    }
    if (this.form.controls.mobile.errors) {
      if (this.form.controls.mobile.errors.maxLength || this.form.controls.mobile.errors.minLength) {
        this.email.setHelperTextContent(null);
        this.name.setHelperTextContent(null);
        this.password.setHelperTextContent(null);
        this.cnfpassword.setHelperTextContent(null);
        this.error = {mobile: 'Invalid Number'};
        return false;
      }
      if (!(this.form.value.country.dial_code.concat(this.form.value.mobile)).match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
        this.email.setHelperTextContent(null);
        this.name.setHelperTextContent(null);
        this.password.setHelperTextContent(null);
        this.cnfpassword.setHelperTextContent(null);
        this.error = {mobile: 'Invalid Number'};
        return false;
      }
      this.email.setHelperTextContent(null);
      this.name.setHelperTextContent(null);
      this.password.setHelperTextContent(null);
      this.cnfpassword.setHelperTextContent(null);
      this.error = {mobile: 'Number is required'};
      return false;
    }
    if (this.form.controls.password.errors) {
      if (this.form.controls.password.errors.invalidPassword) {
        this.email.setHelperTextContent(null);
        this.name.setHelperTextContent(null);
        this.password.setHelperTextContent('Invalid Password');
        this.cnfpassword.setHelperTextContent(null);
        this.error = {};
        return false;
      }
      this.email.setHelperTextContent(null);
      this.name.setHelperTextContent(null);
      this.password.setHelperTextContent('Enter Password');
      this.cnfpassword.setHelperTextContent(null);
      this.error = {};
      return false;
    }
    if (this.form.controls.cnfpassword.errors) {
      if (this.form.value.password !== this.form.value.cnfpassword) {
        this.email.setHelperTextContent(null);
        this.name.setHelperTextContent(null);
        this.password.setHelperTextContent(null);
        this.cnfpassword.setHelperTextContent('Passwords doesn\'t match');
        this.error = {};
        return false;
      }
      this.email.setHelperTextContent(null);
      this.name.setHelperTextContent(null);
      this.password.setHelperTextContent(null);
      this.cnfpassword.setHelperTextContent('Confirm Password');
      this.error = {};
      return false;
    }
    this.email.setHelperTextContent(null);
    this.name.setHelperTextContent(null);
    this.password.setHelperTextContent(null);
    this.cnfpassword.setHelperTextContent(null);
    this.error = {};
    return true;
  }

  signup() {
    if (this.validate()) {
      alert('valid');
    } else {
      alert('invalid');
    }
  }

  setIsdCode() {
    this.render.setProperty(this.isdCode.nativeElement, 'innerHTML', this.form.controls.country.value.dial_code + '-');
  }
}
