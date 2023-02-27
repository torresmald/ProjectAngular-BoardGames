import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardGames } from 'src/app/core/models/boardGames/transformed/boardGames.model';
import { BoardGamesService } from 'src/app/core/services/boardGames/board-games.service';

@Component({
  selector: 'games-mygamedetail',
  templateUrl: './mygamedetail.component.html',
  styleUrls: ['./mygamedetail.component.scss']
})
export class MygamedetailComponent {
  public boardGame?: BoardGames;
  constructor(
    private activatedRoute: ActivatedRoute,
    private boardGamesService: BoardGamesService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {    
      const gameId = params['id'];
      this.boardGamesService.getMyBoardGameDetail(gameId).subscribe((boardGameEl) => {
        this.boardGame = boardGameEl;
      });
    });
  }
  public backToList(){
    this.router.navigate(['myGames'])
  }
}