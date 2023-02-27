import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MygamedetailRoutingModule } from './mygamedetail-routing.module';
import { MygamedetailComponent } from './mygamedetail.component';


@NgModule({
  declarations: [
    MygamedetailComponent
  ],
  imports: [
    CommonModule,
    MygamedetailRoutingModule
  ]
})
export class MygamedetailModule { }