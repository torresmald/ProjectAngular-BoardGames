import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userLogged$: ReplaySubject<boolean> = new ReplaySubject<boolean> (1);

  constructor() { 
    this.userLogged$.next(false)
  }

  public login(){
    this.userLogged$.next(true);
  }

  public logout(){
    this.userLogged$.next(false);
  }
}
