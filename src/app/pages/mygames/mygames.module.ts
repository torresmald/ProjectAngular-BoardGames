import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MygamesRoutingModule } from './mygames-routing.module';
import { MygamesComponent } from './mygames.component';
import { MygameComponent } from './mygame/mygame.component';


@NgModule({
  declarations: [
    MygamesComponent,
    MygameComponent
  ],
  imports: [
    CommonModule,
    MygamesRoutingModule
  ]
})
export class MygamesModule { }
