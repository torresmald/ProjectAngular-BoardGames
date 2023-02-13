import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { BoardGamesService } from 'src/app/core/services/boardGames/board-games.service';
import { BoardGames, PagedBoardGames } from '../../core/models/boardGames/transformed/boardGames.model';


@Component({
  selector: 'games-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {
  public boardGames$?: Observable<BoardGames[]>;
  // public boardGames$?: BoardGames[];
  public nextPage?: string | null;
  public previousPage?: string | null;
  public boardGameTitle : string = '';
  public sortByYear?: "asc" | "desc";
  constructor(
    private boardGamesService: BoardGamesService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.boardGamesService.getBoardGames().pipe(
      map((boardGame) => {
        boardGame.map((game)=> {
          console.log(game);
          
        }) 
      })
    )
    this.boardGames$ = this.boardGamesService.getBoardGames();
    // this.boardGames$ = this.boardGamesService.getBoardGamesPaged();
  }
  public navigateToFormGames() {
    this.router.navigate(['formGames']);
  }
  public removeBoardGame(id?: string) {
    if (!id) {return}
    this.boardGames$ = this.boardGamesService.deleteBoardGame(id).pipe(
      switchMap((boardGame) => {
        return this.boardGamesService.getBoardGames();
      })
    )
  }
  

  public getNextPage(){

  }
  public getPreviousPage(){
    
  }
}
