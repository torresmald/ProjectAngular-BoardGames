import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiBoardGames} from '../api/api-boardGames.model'
import { BoardGames } from '../boardGames.model';

const API_BOARDGAMES_URL = 'https://api-board-games.vercel.app/games';


@Injectable({
  providedIn: 'root'
})
export class ApiBoardGamesService {

  constructor(private request: HttpClient) { }

  public getApiBoardGames():Observable<ApiBoardGames[]>{
    return this.request.get<ApiBoardGames[]>(`${API_BOARDGAMES_URL}`);
  }
  public getApiBoardGameDetail(id: string): Observable<ApiBoardGames[]> {
    return this.request.get<ApiBoardGames[]>(`${API_BOARDGAMES_URL}/${id}`);
  }
  public deleteApiBoardGame(id: string): Observable<ApiBoardGames> {
    return this.request.delete<ApiBoardGames>(`${API_BOARDGAMES_URL}/${id}`);
  }
  // public editApiBoardGame(id: string, body: BoardGame): Observable<ApiBoardGames> {
  //   return this.request.put<ApiBoardGames>(`${API_BOARDGAMES_URL}/${id}`, body);
  // }
  // public createApiBoardGame(body: BoardGame): Observable<ApiBoardGames> {
  //   return this.request.post<ApiBoardGames>(`${API_BOARDGAMES_URL}`, body);
  // }
}
