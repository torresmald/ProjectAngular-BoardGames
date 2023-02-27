import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { BoardGames } from 'src/app/core/models/boardGames/transformed/boardGames.model';

@Component({
  selector: 'games-mygame',
  templateUrl: './mygame.component.html',
  styleUrls: ['./mygame.component.scss']
})
export class MygameComponent {
  
  @Input() public boardGame?: BoardGames;

  @Output() public onRemove: EventEmitter<void> = new EventEmitter<void>();
  constructor(private router: Router) {}

  public navigateToDetail() {
    if (this.boardGame) {
      this.router.navigate(['myGames/detail', this.boardGame.id]);
    }
  }
  public editBoardGame() {
    this.router.navigate(['formMyGames'], {
      queryParams: {
        id: this.boardGame?.id,
      }, 
    });
  }
  public removeBoardGame() {
    this.onRemove.emit();
  }
}
