import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiBoardGames } from 'src/app/core/services/boardGames/api/api-boardGames.model';

@Component({
  selector: 'game-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  @Input() public boardGame?: ApiBoardGames;
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
