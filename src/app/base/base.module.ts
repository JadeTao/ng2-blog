import { MdlModule } from '@angular-mdl/core';
import { BaseRoutes } from './base.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base.component';
import { IntroComponent } from './intro/intro.component';




@NgModule({
  imports: [
    CommonModule, BaseRoutes, MdlModule
  ],
  declarations: [BaseComponent,
    IntroComponent
  ]
})
export class BaseModule { }