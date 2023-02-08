import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBoardGameComponent} from './form-board-game.component'
import { FormBoardGameRoutingModule } from './form-board-game-routing.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   FormBoardGameComponent
  ],
  imports: [
    CommonModule,
    FormBoardGameRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormBoardGameModule { }
