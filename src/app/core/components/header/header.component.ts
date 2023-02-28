import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'games-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  langs: string[] = [];

  public currentRoute?: string;
  public isLogged?: boolean = false;
  constructor(
    private router: Router,
    private userService: UsersService,
    public translate: TranslateService
  ) {
    translate.setDefaultLang('en');
    translate.use('en'), this.translate.addLangs(['en', 'es']);
    this.langs = this.translate.getLangs();
  }
  changeLang(lang: string) {
    this.translate.use(lang)
  }
  ngOnInit(): void {
    this.userService.userLogged$.subscribe(
      (isLoggedUser) => (this.isLogged = isLoggedUser)
    );
  }
  public selectedRoute() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
}
