import { Injectable } from '@angular/core';
import { ApiBoardGamesService } from './api/api-board-games.service';
import { ApiBoardGames } from './api/api-boardGames.model';
import { map, Observable } from 'rxjs';
import { BoardGames } from './boardGames.model';
import { transformData } from './boardGames.helpers';

@Injectable({
  providedIn: 'root',
})
export class BoardGamesService {
  constructor(private apiBoardGamesService: ApiBoardGamesService) {}

  public getBoardGames(): Observable<BoardGames[]> {
    return this.apiBoardGamesService.getApiBoardGames().pipe(
      map((boardGames: ApiBoardGames[]) => {
        return boardGames.map((boardGame) => transformData(boardGame));
      })
    );
  }

  public getBoardGameDetail(id: string): Observable<BoardGames[]> {
    return this.apiBoardGamesService.getApiBoardGameDetail(id).pipe(
      map((boardGames: ApiBoardGames[]) => {
        return boardGames.map((boardGame) => transformData(boardGame));
      })
    );
  }
  public deleteBoardGame(id: string): Observable<BoardGames> {
    return this.apiBoardGamesService
      .deleteApiBoardGame(id)
      .pipe(map((boardGame) => transformData(boardGame)));
  }

  // public editBoardGame(id: string, body: BoardGame): Observable<BoardGame> {
  //   return this.apiBoardGamesService
  //     .editApiBoardGame(id, body)
  //     .pipe(map((product) => product));
  // }
  // public createBoardGame(body: BoardGame): Observable<BoardGame> {
  //   return this.apiBoardGamesService
  //     .createApiBoardGame(body)
  //     .pipe(map((product) => product));
  // }
}
