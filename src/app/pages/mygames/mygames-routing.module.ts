import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MygamesComponent } from './mygames.component';

const routes: Routes = [{
  path: '',
  component: MygamesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MygamesRoutingModule { }
