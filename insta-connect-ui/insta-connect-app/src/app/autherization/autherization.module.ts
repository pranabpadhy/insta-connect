import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AutherizationRoutingModule } from './autherization-routing.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    AutherizationRoutingModule,
    ReactiveFormsModule,
    MaterialDesignModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent
  ]
})
export class AutherizationModule { }
