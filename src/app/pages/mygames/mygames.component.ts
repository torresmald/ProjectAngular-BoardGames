import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { categories } from 'src/app/core/models/boardGames/transformed/boardGames.data';
import { BoardGames } from 'src/app/core/models/boardGames/transformed/boardGames.model';
import { Categories } from 'src/app/core/models/categories/transformed/category.data';
import { BoardGamesService } from 'src/app/core/services/boardGames/board-games.service';

@Component({
  selector: 'games-mygames',
  templateUrl: './mygames.component.html',
  styleUrls: ['./mygames.component.scss']
})
export class MygamesComponent {
  public boardGames$?: Observable<BoardGames[]>;
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
    this.boardGames$ = this.boardGamesService.getMyBoardGames().pipe(
      map((boardGame) => boardGame)
    );
  }

  
  public removeBoardGame(id?: string) {
    if (!id) {
      return;
    }
    this.boardGames$ = this.boardGamesService.deleteMyBoardGame(id).pipe(
      switchMap((boardGame) => {
        return this.boardGamesService
          .getMyBoardGames()
          .pipe(map((boardGame) => boardGame));
      })
    );
  }
}
