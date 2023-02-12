import { Injectable } from '@angular/core';
import { ApiBoardGamesService } from './api/api-board-games.service';
import { ApiBoardGames } from '../../models/boardGames/api/api-boardGames.model';
import { forkJoin, map, Observable, tap } from 'rxjs';
import { BoardGames, PagedBoardGames } from '../../models/boardGames/transformed/boardGames.model';
import { transformDataGames } from '../boardGames/helpers/boardGames.helpers';
import { LoadingService } from '../loading/loading.service'; 
import { CategoriesService } from '../categories/categories.service';
import { ModalService } from '../modal/modal.service';

@Injectable({
  providedIn: 'root',
})
export class BoardGamesService {
  constructor(
    private apiBoardGamesService: ApiBoardGamesService,
    private loadingService: LoadingService,
    private categoriesService: CategoriesService,
    private modalService: ModalService
    ) 
    {}

  public getBoardGames(): Observable<BoardGames[]> {
    this.loadingService.showLoading();
    return this.apiBoardGamesService.getApiBoardGames().pipe(
      map((boardGames: ApiBoardGames[]) => {
        return boardGames.map((boardGame) => transformDataGames(boardGame));
      }),
      tap(() => this.loadingService.hideLoading())
    );
  }
  public getBoardGamesPaged(): Observable<PagedBoardGames> {
    this.loadingService.showLoading();
    return this.apiBoardGamesService.getApiBoardGamesPaged().pipe(
      map((pagedBoardGames) => {
        return {...pagedBoardGames, 
          nextPage: pagedBoardGames.nextPage,
          previousPage: pagedBoardGames.previousPage,
          games: pagedBoardGames.games.map((boardGame) =>
          transformDataGames(boardGame))}
      }),
      tap(() =>  this.loadingService.hideLoading())
      )
  }

  public getBoardGameDetail(id: string): Observable<BoardGames> {
    this.loadingService.showLoading();
    return forkJoin([
      this.apiBoardGamesService.getApiBoardGameDetail(id),
      this.categoriesService.getCategories()
    ]).pipe(
      map(([apiBoardGame, categories]) => {
        const selectedCategory = categories.find((category) => category.name === apiBoardGame.category);
        return transformDataGames(apiBoardGame, selectedCategory);
      }),
      tap(() => this.loadingService.hideLoading())
    )
  }
  
  public deleteBoardGame(id: string): Observable<BoardGames> {
    this.modalService.showModal('ELIMINADO CON ÉXITO!')
    return this.apiBoardGamesService
      .deleteApiBoardGame(id)
      .pipe(map((boardGame) => transformDataGames(boardGame)));
  }

  public editBoardGame(id: string, body: BoardGames): Observable<BoardGames> {
    this.modalService.showModal('EDITADO CON ÉXITO!')
    return this.apiBoardGamesService
      .editApiBoardGame(id, body)
      .pipe(map((boardGame) => transformDataGames(boardGame)));
  }
  public createBoardGame(body: BoardGames): Observable<BoardGames> {
    this.modalService.showModal('CREADO CON ÉXITO!')
    return this.apiBoardGamesService
      .createApiBoardGame(body)
      .pipe(map((boardGame) => transformDataGames(boardGame)));
  }
}
