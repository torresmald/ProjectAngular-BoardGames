import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MygamedetailComponent } from './mygamedetail.component';

const routes: Routes = [{
  path:'',
  component: MygamedetailComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MygamedetailRoutingModule { }
