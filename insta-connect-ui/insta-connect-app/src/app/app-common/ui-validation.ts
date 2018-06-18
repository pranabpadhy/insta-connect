import { AbstractControl, ValidatorFn } from '@angular/forms';

const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const passRegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export namespace UiValidation {

  export function isEmailValid(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      return emailRegExp.test(control.value) ? null : { 'invalidEmail': true };
    };
  }

  export function isPasswordValid(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      return passRegExp.test(control.value) ? null : { 'invalidPassword': true };
    };
  }

  export function NoWhitespaceValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const isWhitespace = ((control.value) || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { 'whitespace': true };
    };
  }
}
