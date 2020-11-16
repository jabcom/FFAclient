import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),    
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'add-words',
    loadChildren: () => import('./add-words/add-words.module').then( m => m.AddWordsPageModule)
  },  {
    path: 'choose-catagory',
    loadChildren: () => import('./choose-catagory/choose-catagory.module').then( m => m.ChooseCatagoryPageModule)
  },
  {
    path: 'playing-game',
    loadChildren: () => import('./playing-game/playing-game.module').then( m => m.PlayingGamePageModule)
  },

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
