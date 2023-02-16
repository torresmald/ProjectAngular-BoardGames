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


// TODO: arreglar


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
    (component.isUserRegistered || !component.userForm?.dirty)
      ? true
      : this.modalService.showModal(
          'NO HAS TERMINADO DE RELLENAR EL FORMULARIO'
        );
    return this.modalService.result$;
  }
}
