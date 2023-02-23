import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { FormBoardGameComponent } from 'src/app/pages/form-board-game/form-board-game.component';
import { ModalService } from '../../services/modal/modal.service';




@Injectable({
  providedIn: 'root',
})
export class ExitGuardGuard implements CanDeactivate<FormBoardGameComponent> {
  constructor(private modalService: ModalService) {}
  canDeactivate(
    component: FormBoardGameComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    component.isBoardGameCreated || !component.boardGamesForm?.dirty
      ? true
      : this.modalService.showModal(
          'NO HAS TERMINADO DE RELLENAR EL FORMULARIO'
        );
    return this.modalService.result$;
  }
}
