import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormMyBoardGameComponent } from 'src/app/pages/form-my-board-game/form-my-board-game.component';
import { ModalService } from '../../services/modal/modal.service';

@Injectable({
  providedIn: 'root'
})
export class ExitMygameGuard implements CanDeactivate<unknown> {constructor(private modalService: ModalService) {}

canDeactivate(
  component: FormMyBoardGameComponent,
  currentRoute: ActivatedRouteSnapshot,
  currentState: RouterStateSnapshot,
  nextState?: RouterStateSnapshot
): Observable<boolean> | boolean {
  (component.isBoardGameCreated || component.boardGamesForm?.dirty)
    ? true
    : this.modalService.showModal(
        'NO HAS TERMINADO DE RELLENAR EL FORMULARIO'
      );
  return this.modalService.result$;
}
  
}
