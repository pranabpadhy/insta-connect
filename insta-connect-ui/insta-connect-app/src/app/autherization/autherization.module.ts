import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutherizationRoutingModule } from './autherization-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    AutherizationRoutingModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent
  ]
})
export class AutherizationModule { }
