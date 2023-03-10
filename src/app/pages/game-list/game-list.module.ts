import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameListRoutingModule } from './game-list-routing.module';
import { GameListComponent } from './game-list.component';
import { GameComponent } from './game/game.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [GameListComponent, GameComponent],
  imports: [
    CommonModule,
    FormsModule,
    GameListRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class GameListModule { }
