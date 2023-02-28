import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBoardGameComponent} from './form-board-game.component'
import { FormBoardGameRoutingModule } from './form-board-game-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
   FormBoardGameComponent
  ],
  imports: [
    CommonModule,
    FormBoardGameRoutingModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class FormBoardGameModule { }
