import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowHidePasswordDirective } from './show-hide-password/show-hide-password.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ShowHidePasswordDirective],
  exports: [ShowHidePasswordDirective]
})
export class AppCommonModule { }
