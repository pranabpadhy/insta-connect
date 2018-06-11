import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { MaterialModule } from '../material/material.module';

import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    NavigationRoutingModule,
    MaterialModule
  ],
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class NavigationModule { }
