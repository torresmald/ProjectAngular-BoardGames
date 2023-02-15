import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'games-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public currentRoute?: string;
  public isLogged?: boolean = false;
  // public isLogged$?: Observable<boolean>
  constructor(private router: Router, private userService: UsersService) {}

  ngOnInit(): void {
    // this.isLogged$ = this.authService.userLogged$
      this.userService.userLogged$.subscribe((isLoggedUser) => this.isLogged = isLoggedUser)
  }
  public selectedRoute() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
}
