import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MygamedetailRoutingModule } from './mygamedetail-routing.module';
import { MygamedetailComponent } from './mygamedetail.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    MygamedetailComponent
  ],
  imports: [
    CommonModule,
    MygamedetailRoutingModule,
    TranslateModule
  ]
})
export class MygamedetailModule { }