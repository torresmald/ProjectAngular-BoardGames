import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'games-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public currentRoute?: string;
  public isLogged?: boolean = false;
  // public isLogged$?: Observable<boolean>
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    // this.isLogged$ = this.authService.userLogged$
      this.authService.userLogged$.subscribe((isLoggedUser) => this.isLogged = isLoggedUser)
  }
  public selectedRoute() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
}
