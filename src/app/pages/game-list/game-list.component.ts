import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { BoardGamesService } from 'src/app/core/services/boardGames/board-games.service';
import { BoardGames } from 'src/app/core/services/boardGames/boardGames.model';

@Component({
  selector: 'games-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {
  public boardGames: BoardGames[] = [];
  public showModal: boolean = false;
  constructor(
    private boardGamesService: BoardGamesService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.boardGamesService.getBoardGames().subscribe((boardGamesApi) => {
      this.boardGames = boardGamesApi;
    });
  }
  public navigateToFormGames() {
    this.router.navigate(['formGames']);
  }
  public removeBoardGame(id?: string) {
    this.showModal = true;
    if (!id) {
      return;
    }
    this.boardGamesService
      .deleteBoardGame(id)
      .pipe(
        switchMap((boardGame) => {
          return this.boardGamesService.getBoardGames();
        })
      )
      .subscribe((boardGamesApi) => {
        this.boardGames = boardGamesApi;
      });
  }
  public closeModal(){
    this.showModal = false;
  }
}
