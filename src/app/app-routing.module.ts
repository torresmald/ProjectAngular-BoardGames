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
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'formGames',
    loadChildren: () => import('./pages/form-board-game/form-board-game.module').then(m => m.FormBoardGameModule)
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
