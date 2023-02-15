import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/core/models/users/transformed/users.model';
import { UsersService } from 'src/app/core/services/users/users.service';

const TOKEN_KEY = 'user-token-key';

@Component({
  selector: 'games-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {
  public userData?: Users;
  public localData: string | null = '';

  constructor(private router: Router, private userService: UsersService) {}

  ngOnInit(): void {
    this.localData = localStorage.getItem(TOKEN_KEY);
    if (this.localData) {
      this.userData = JSON.parse(this.localData);   
    }
  }
  public logout() {
    this.userService.logoutUser();
    this.router.navigate(['']);
  }
}
