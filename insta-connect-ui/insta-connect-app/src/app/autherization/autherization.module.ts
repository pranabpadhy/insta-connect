import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AutherizationRoutingModule } from './autherization-routing.module';
import { MaterialDesignModule } from '../material-design/material-design.module';
import { AppCommonModule } from '../app-common/app-common.module';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    AutherizationRoutingModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    AppCommonModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent
  ]
})
export class AutherizationModule { }
