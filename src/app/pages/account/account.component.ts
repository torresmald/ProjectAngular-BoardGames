import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'games-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public logout() {
    this.authService.logout();
    this.router.navigate(['home'])
  }
}
