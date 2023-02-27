import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExitRegisterGuard } from 'src/app/core/guards/canDeactivate/exit-register.guard';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent 
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
