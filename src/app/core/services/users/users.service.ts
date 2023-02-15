import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject, tap } from 'rxjs';
import { ApiUsers } from '../../models/users/api/api-users.model';
import { Users } from '../../models/users/transformed/users.model';
import { ModalService } from '../modal/modal.service';
import { ApiUsersService } from './api/api-users.service';
import { transformDataUsers } from './helpers/users.helpers';

const TOKEN_KEY = 'user-token-key';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  public userLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(
    private apiUsersService: ApiUsersService,
    private modalService: ModalService
  ) {
    this.userLogged$.next(this.isLogged());
  }

  public getUsers(): Observable<Users[]> {
    return this.apiUsersService.getApiUsers().pipe(
      map((users: Users[]) => {
        return users.map((user) => transformDataUsers(user));
      })
    );
  }
  public loginUser(body: Users): Observable<ApiUsers> {
    return this.apiUsersService.loginApiUser(body).pipe(
      tap((response: ApiUsers) => {
        const saveStore = JSON.stringify({
          token: response.token,
          email: response.user.email,
          age: response.user.age,
          nickname: response.user.nickname,
          picture: response.user.picture
        });
        localStorage.setItem(TOKEN_KEY, saveStore);
        this.userLogged$.next(true);
      })
    );
  }
  public getToken() {
    const authToken = localStorage.getItem(TOKEN_KEY);
    return authToken ? JSON.parse(authToken).token : null;
  }
  public isLogged(): boolean {
    const authToken = localStorage.getItem(TOKEN_KEY);
    if (!authToken) {
      return false;
    }
    const isValidToken = JSON.parse(authToken).token;
    return !!isValidToken;
  }
  public createUser(body: Users): Observable<Users> {
    return this.apiUsersService
      .registerApiUser(body)
      .pipe(map((user) => transformDataUsers(user)));
  }
  public logoutUser() {
    const removeToken = localStorage.removeItem(TOKEN_KEY);
    this.userLogged$.next(false);
  }
}
