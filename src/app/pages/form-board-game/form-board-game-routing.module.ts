import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBoardGameComponent } from './form-board-game.component';

const routes: Routes = [{
  path: '',
  component: FormBoardGameComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormBoardGameRoutingModule { }
