import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardGamesService } from 'src/app/core/services/boardGames/board-games.service';
import { BoardGames } from 'src/app/core/services/boardGames/boardGames.model';

@Component({
  selector: 'games-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent {
  public boardGame?: BoardGames[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private boardGamesService: BoardGamesService,
    private router: Router
  ) {
    this.activatedRoute.params.subscribe((params) => {    
      const gameId = params['id'];
      this.boardGamesService.getBoardGameDetail(gameId).subscribe((boardGameEl) => {
        this.boardGame = boardGameEl; 
      });
    });
  }

  public backToList(){
    this.router.navigate(['list'])
  }
}
