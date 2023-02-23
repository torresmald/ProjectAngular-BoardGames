import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, switchMap, tap } from 'rxjs';
import { categories } from 'src/app/core/models/boardGames/transformed/boardGames.data';
import { Categories } from 'src/app/core/models/categories/transformed/category.data';
import { BoardGamesService } from 'src/app/core/services/boardGames/board-games.service';
import {BoardGames} from '../../core/models/boardGames/transformed/boardGames.model';

@Component({
  selector: 'games-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent {
  public boardGames$?: Observable<BoardGames[]>;
  public boardGamesPaged$?: Observable<BoardGames[]>;
  public nextPage?: string | null;
  public previousPage?: string | null;
  public boardGameTitle: string = '';
  public sortByYear?: 'asc' | 'desc';
  public boardGameCategory?: Categories;
  public isForChilds?: 'true' | 'false';
  public filterCategories: Categories[] = categories;
  constructor(
    private boardGamesService: BoardGamesService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    // TODO: Llevar toda la lógica de paginado a un servicio PagedBoardGames
    this.boardGamesPaged$ = this.boardGamesService.getBoardGamesPaged().pipe(
      tap((page) => {
        this.nextPage = page.nextPage;
        this.previousPage = page.previousPage;
      }),
      map((pagedBoardGame) => pagedBoardGame.games)
    );
  }

  public navigateToFormGames() {
    this.router.navigate(['formGames']);
  }
  public removeBoardGame(id?: string) {
    if (!id) {
      return;
    }
    this.boardGamesPaged$ = this.boardGamesService.deleteBoardGame(id).pipe(
      switchMap((boardGame) => {
        return this.boardGamesService
          .getBoardGamesPaged()
          .pipe(map((pagedBoardGame) => pagedBoardGame.games));
      })
    );
  }

  public getNextPage() {
    if (!this.nextPage) {
      return;
    }
    this.boardGamesPaged$ = this.boardGamesService
      .getBoardGamesPaged(this.nextPage)
      .pipe(
        tap((page) => {
          this.nextPage = page.nextPage;
          this.previousPage = page.previousPage;
        }),
        map((pagedBoardGame) => pagedBoardGame.games)
      );
  }
  public getPreviousPage() {
    if (!this.previousPage) {
      return;
    }
    this.boardGamesPaged$ = this.boardGamesService
      .getBoardGamesPaged(this.previousPage)
      .pipe(
        tap((page) => {
          this.nextPage = page.nextPage;
          this.previousPage = page.previousPage;
        }),
        map((pagedBoardGame) => pagedBoardGame.games)
      );
  }
}
