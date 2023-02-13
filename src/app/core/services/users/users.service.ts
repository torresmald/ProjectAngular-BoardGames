import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApiUsers } from '../../models/users/api/api-users.model';
import { Users } from '../../models/users/transformed/users.model';
import { ModalService } from '../modal/modal.service';
import { ApiUsersService } from './api/api-users.service';
import {transformDataUsers,} from './helpers/users.helpers';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private apiUsersService: ApiUsersService, private modalService: ModalService) {}

  public getUsers(): Observable<Users[]> {
    return this.apiUsersService.getApiUsers().pipe(
      map((users: ApiUsers[]) => {
        return users.map((user) => transformDataUsers(user));
      })
    );
  }
  public loginUser(body: Users): Observable<Users> {
    this.modalService.showModal('LOGUEADO CON ÉXITO!')
    return this.apiUsersService.loginApiUser(body)
      .pipe(map((user) => transformDataUsers(user)));
  }
  public createUser(body: Users): Observable<Users> {
    this.modalService.showModal('CREADO CON ÉXITO!')
    return this.apiUsersService.registerApiUser(body)
      .pipe(map((user) => transformDataUsers(user)));
  }
}
