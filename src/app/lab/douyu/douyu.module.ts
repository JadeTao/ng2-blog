import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DouyuComponent } from './douyu.component';
import { EchartsNg2Module } from 'echarts-ng2';

@NgModule({
  imports: [
    CommonModule,
    EchartsNg2Module
  ],
  declarations: [DouyuComponent]
})
export class DouyuModule { }