import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameListRoutingModule } from './game-list-routing.module';
import { GameListComponent } from './game-list.component';
import { GameComponent } from './game/game.component';


@NgModule({
  declarations: [GameListComponent, GameComponent],
  imports: [
    CommonModule,
    GameListRoutingModule
  ]
})
export class GameListModule { }
