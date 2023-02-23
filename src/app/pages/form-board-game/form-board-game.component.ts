import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, map, of } from 'rxjs';
import { BoardGamesService } from 'src/app/core/services/boardGames/board-games.service';
import { categories, numberPlayers, playingTime } from 'src/app/core/models/boardGames/transformed/boardGames.data';
import { BoardGames } from '../../core/models/boardGames/transformed/boardGames.model';
import { NumberPlayers } from '../../core/models/boardGames/transformed/numberPlayers.model';
import { PlayingTime } from '../../core/models/boardGames/transformed/playingTime.model';
import { Categories } from 'src/app/core/models/categories/transformed/category.data';

@Component({
  selector: 'games-form-board-game',
  templateUrl: './form-board-game.component.html',
  styleUrls: ['./form-board-game.component.scss'],
})
export class FormBoardGameComponent {
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
          return this.boardGamesService.getBoardGameDetail(id);
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
    // if (!this.boardGamesForm?.valid) {
    //   return;
    // }
    const boardGameRequest = this.canEdit
      ? this.boardGamesService.editBoardGame(
          this.gameMongoId,
          this.boardGamesForm?.value
        )
      : this.boardGamesService.createBoardGame(this.boardGamesForm?.value);
    boardGameRequest.subscribe(() => {
      this.isBoardGameCreated = true;
      this.boardGamesForm?.reset();
      this.router.navigate(['myGames']);
    });
  }
}
