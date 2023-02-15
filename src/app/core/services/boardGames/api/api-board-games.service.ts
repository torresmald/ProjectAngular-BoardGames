import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiBoardGames, ApiPagedBoardGames } from '../../../models/boardGames/api/api-boardGames.model';
import { BoardGames } from '../../../models/boardGames/transformed/boardGames.model';
import {HttpParams} from "@angular/common/http";


const API_URLS = {
  DOMAIN: 'https://api-board-games.vercel.app/',
  GAMES: 'games/',
  PAGED_GAMES: 'games/paged'
}

@Injectable({
  providedIn: 'root',
})
export class ApiBoardGamesService {
  private GAMES_URL = `${API_URLS.DOMAIN}${API_URLS.GAMES}`;
  private PAGED_GAMES_URL = `${API_URLS.DOMAIN}${API_URLS.PAGED_GAMES}`;

  constructor(private request: HttpClient) {}

  public getApiBoardGames(): Observable<ApiBoardGames[]> {
    return this.request.get<ApiBoardGames[]>(`${this.GAMES_URL}`);
  }
  public getApiBoardGamesPaged(page: string = '1'): Observable<ApiPagedBoardGames> {
    return this.request.get<ApiPagedBoardGames>(`${this.PAGED_GAMES_URL}?page=${page}`);
  }
  public getApiBoardGameDetail(id: string): Observable<ApiBoardGames> {
    return this.request.get<ApiBoardGames>(`${this.GAMES_URL}${id}`);
  }
  public deleteApiBoardGame(id: string): Observable<ApiBoardGames> {
    return this.request.delete<ApiBoardGames>(`${this.GAMES_URL}${id}`);
  }
  public editApiBoardGame(
    id: string,
    body: BoardGames
  ): Observable<ApiBoardGames> {
    return this.request.put<ApiBoardGames>(`${this.GAMES_URL}${id}`, body);
  }
  public createApiBoardGame(body: BoardGames): Observable<ApiBoardGames> {
    return this.request.post<ApiBoardGames>(`${this.GAMES_URL}`, body);
  }
}
