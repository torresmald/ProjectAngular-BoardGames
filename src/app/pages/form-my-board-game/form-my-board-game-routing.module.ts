import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/canActivate/auth.guard';
import { ExitGuardGuard } from 'src/app/core/guards/canDeactivate/exit-guard.guard';
import { FormMyBoardGameComponent } from './form-my-board-game.component';

const routes: Routes = [{
path: '',
  component: FormMyBoardGameComponent,
  canActivate: [AuthGuard],
  canDeactivate: [ExitGuardGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormMyBoardGameRoutingModule { }
