import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiUsers } from 'src/app/core/models/users/api/api-users.model';
import { Users } from 'src/app/core/models/users/transformed/users.model';
import { environment } from 'src/app/environments/environment.prod';
const users = 'users';
const register = 'register';
const login = 'login';
const API_USERS_URL = environment.host;

@Injectable({
  providedIn: 'root'
})

export class ApiUsersService {

  constructor(private request: HttpClient) { }

  public getApiUsers(): Observable<Users[]> {
    return this.request.get<Users[]>(`${API_USERS_URL}${users}`);
  }
  public loginApiUser(body: Users): Observable<ApiUsers> {
    return this.request.post<ApiUsers>(`${API_USERS_URL}${users}/${login}`, body);
  }
  public registerApiUser(body: Users): Observable<Users> {
    return this.request.post<Users>(`${API_USERS_URL}${users}/${register}`, body);
  }

}
