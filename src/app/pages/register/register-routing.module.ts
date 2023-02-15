import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitRegisterGuard } from 'src/app/core/guards/canDeactivate/exit-register.guard';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    // canDeactivate: [ExitRegisterGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
