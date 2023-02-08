import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, map, of } from 'rxjs';
import { BoardGamesService } from 'src/app/core/services/boardGames/board-games.service';
import { BoardGames } from 'src/app/core/services/boardGames/boardGames.model';

@Component({
  selector: 'games-form-board-game',
  templateUrl: './form-board-game.component.html',
  styleUrls: ['./form-board-game.component.scss']
})
export class FormBoardGameComponent {
  public boardGamesForm?: FormGroup;
  public canEdit: boolean = false;
  public gameId?: string;
  constructor(
    private formBuilder:FormBuilder,
    private boardGamesService: BoardGamesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    ){

      this.boardGamesForm = this.formBuilder.group({
      title: new FormControl('', Validators.required),
      publisher: new FormControl('', Validators.required),

    })
      // this.activatedRoute.queryParams.pipe(
      //   map((queryParams) => queryParams['id']),
      //   switchMap((id: string) => {
      //     if (!id) {
      //       return of(undefined);
      //     } else {
      //       this.gameId = id;
      //       return this.boardGamesService.getBoardGameDetail(id);
      //     }
      //   }),
      // ).subscribe((boardGame?: BoardGame[]) => {
      //   this.canEdit = !!boardGame;
      //   this.createNewForm(boardGame);
      // });
  }

  public createNewForm(boadGame?: BoardGames[]){
   
  }

  public createNewBoardGame() {
  //  if(!this.boardGamesForm?.valid) {return}
  //  const boardGameRequest = this.canEdit ? this.boardGamesService.editBoardGame(this.gameId, this.boardGamesForm.value) : this.boardGamesService.createBoardGame(this.boardGamesForm.value);
  //  boardGameRequest.subscribe(() => {
  //   this.boardGamesForm?.reset()
  //   this.router.navigate(['list'])
  //  })
  // }
  }
}
