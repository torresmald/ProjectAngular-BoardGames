import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { categories, numberPlayers, playingTime } from 'src/app/core/models/boardGames/transformed/boardGames.data';
import { BoardGames } from 'src/app/core/models/boardGames/transformed/boardGames.model';
import { NumberPlayers } from 'src/app/core/models/boardGames/transformed/numberPlayers.model';
import { PlayingTime } from 'src/app/core/models/boardGames/transformed/playingTime.model';
import { Categories } from 'src/app/core/models/categories/transformed/category.data';
import { BoardGamesService } from 'src/app/core/services/boardGames/board-games.service';

@Component({
  selector: 'games-form-my-board-game',
  templateUrl: './form-my-board-game.component.html',
  styleUrls: ['./form-my-board-game.component.scss']
})
export class FormMyBoardGameComponent {

  public boardGamesForm?: FormGroup;
  public canEdit: boolean = false;
  public categoriesEl: Categories[] = categories;
  public numberPlayersEl: NumberPlayers[] = numberPlayers;
  public playingTimeEl : PlayingTime[] = playingTime;
  public gameId: string = '0';
  public gameMongoId: string = '0';
  public isBoardGameCreated: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private boardGamesService: BoardGamesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.pipe(
      map((queryParams) => queryParams['id']),
      switchMap((id: string) => {
        if (!id) {
          return of(undefined);
        } else {
          this.gameId = id;
          return this.boardGamesService.getMyBoardGameDetail(id);
        }
      })
    )
    .subscribe((boardGame?: BoardGames) => {
      this.gameMongoId = boardGame?._id || '0';
      this.canEdit = !!boardGame;
      this.createNewForm(boardGame);
    });
  }

  public createNewForm(boadGame?: BoardGames) {
    this.boardGamesForm = this.formBuilder.group({
      title: new FormControl('' || boadGame?.title ,Validators.required),
      designer: new FormControl('' || boadGame?.designer , Validators.required),
      publisher: new FormControl(
        '' || boadGame?.publisher ,
        Validators.required
      ),
      year: new FormControl('' || boadGame?.year ,[Validators.required, Validators.min(1895),Validators.max(2023)]),
      category: new FormControl(''|| boadGame?.category.name  , Validators.required),
      picture: new FormControl('' || boadGame?.picture , Validators.required),
      players: new FormControl('' || boadGame?.players , [Validators.required]),
      weight: new FormControl('' || boadGame?.weight , [Validators.required, Validators.min(1),Validators.max(5)]),
      playingTime: new FormControl(
        ''  || boadGame?.playingTime ,
        Validators.required
      ),
      isForChilds: new FormControl(
        '' || boadGame?.isForChilds ,
        Validators.required
      ),
    });
  }

  public createNewBoardGame() {
   
    const boardGameRequest = this.boardGamesService.editMyBoardGame(
          this.gameMongoId,
          this.boardGamesForm?.value
        )
    boardGameRequest.subscribe(() => {
      this.isBoardGameCreated = true;
      this.boardGamesForm?.reset();
      this.router.navigate(['myGames']);
    });
  }
}
