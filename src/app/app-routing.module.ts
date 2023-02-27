import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/game-list/game-list.module').then(m => m.GameListModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import ('./pages/detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: 'myGames/detail/:id',
    loadChildren: () => import ('./pages/mygamedetail/mygamedetail.module').then(m => m.MygamedetailModule)
  },
  {
    path: 'login',
    loadChildren: () => import ('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import ('./pages/register/register.module').then(m => m.RegisterModule),
    
  },
  {
    path: 'account',
    loadChildren: () => import ('./pages/account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'formGames',
    loadChildren: () => import('./pages/form-board-game/form-board-game.module').then(m => m.FormBoardGameModule)
  },
  {
    path: 'formMyGames',
    loadChildren: () => import('./pages/form-my-board-game/form-my-board-game.module').then(m => m.FormMyBoardGameModule)
  },
  {
    path: 'myGames',
    loadChildren: () => import ('./pages/mygames/mygames.module').then(m => m.MygamesModule)
  },
  {
    path: '**',
    loadChildren: () => import ('./pages/url-not-found/url-not-found.module').then(m => m.UrlNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
