import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BoardGames } from '../../../core/models/boardGames/transformed/boardGames.model';

@Component({
  selector: 'game-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  @Input() public boardGame?: BoardGames;
  @Output() public onRemove: EventEmitter<void> = new EventEmitter<void>();
  constructor(private router: Router) {}

  public navigateToDetail() {
    if (this.boardGame) {
      this.router.navigate(['detail', this.boardGame.id]);
    }
  }
  public editBoardGame() {
    this.router.navigate(['formGames'], {
      queryParams: {
        id: this.boardGame?.id,
      }, 
    });
  }
  public removeBoardGame() {
    this.onRemove.emit();
  }
}
