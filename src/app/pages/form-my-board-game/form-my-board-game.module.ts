import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormMyBoardGameRoutingModule } from './form-my-board-game-routing.module';
import { FormMyBoardGameComponent } from './form-my-board-game.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormMyBoardGameComponent
  ],
  imports: [
    CommonModule,
    FormMyBoardGameRoutingModule,
    ReactiveFormsModule
  ]
})
export class FormMyBoardGameModule { }
