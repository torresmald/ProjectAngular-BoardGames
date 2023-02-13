import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormBoardGameComponent } from 'src/app/pages/form-board-game/form-board-game.component';

@Injectable({
  providedIn: 'root'
})
export class ExitGuardGuard implements CanDeactivate<FormBoardGameComponent> {
  
  canDeactivate(
    component: FormBoardGameComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(component.isBoardGameCreated || !component.boardGamesForm?.dirty){
        return true;
      }
      return window.confirm('No te vayas')
  }
}
