import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { first, Observable } from 'rxjs';
import { RegisterComponent } from 'src/app/pages/register/register.component';
import { ModalService } from '../../services/modal/modal.service';

@Injectable({
  providedIn: 'root',
})
export class ExitRegisterGuard implements CanDeactivate<RegisterComponent> {
  constructor(private modalService: ModalService) {}

  canDeactivate(
    component: RegisterComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if (component.isUserRegistered || !component.userForm?.dirty) {
      return true;
    } else {
      this.modalService.showModal('NO HAS TERMINADO DE RELLENAR EL FORMULARIO');
    }
    return this.modalService.result$;
  }
}
