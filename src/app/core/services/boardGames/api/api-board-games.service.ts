import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBoardGames, ApiPagedBoardGames } from '../../../models/boardGames/api/api-boardGames.model';
import { BoardGames } from '../../../models/boardGames/transformed/boardGames.model';


const games = 'games'
const page = 1;
const API_BOARDGAMES_URL = `https://api-board-games.vercel.app/${games}`;
const API_BOARDGAMESPAGED_URL = `https://api-board-games.vercel.app/games/paged?page=${page}`;
@Injectable({
  providedIn: 'root',
})
export class ApiBoardGamesService {
  constructor(private request: HttpClient) {}

  public getApiBoardGames(): Observable<ApiBoardGames[]> {
    return this.request.get<ApiBoardGames[]>(`${API_BOARDGAMES_URL}`);
  }
  public getApiBoardGamesPaged(): Observable<ApiPagedBoardGames> {
    return this.request.get<ApiPagedBoardGames>(`${API_BOARDGAMESPAGED_URL}`);
  }
  public getApiBoardGameDetail(id: string): Observable<ApiBoardGames> {
    return this.request.get<ApiBoardGames>(`${API_BOARDGAMES_URL}/${id}`);
  }
  public deleteApiBoardGame(id: string): Observable<ApiBoardGames> {
    return this.request.delete<ApiBoardGames>(`${API_BOARDGAMES_URL}/${id}`);
  }
  public editApiBoardGame(
    id: string,
    body: BoardGames
  ): Observable<ApiBoardGames> {
    return this.request.put<ApiBoardGames>(`${API_BOARDGAMES_URL}/${id}`, body);
  }
  public createApiBoardGame(body: BoardGames): Observable<ApiBoardGames> {
    return this.request.post<ApiBoardGames>(`${API_BOARDGAMES_URL}`, body);
  }
}
