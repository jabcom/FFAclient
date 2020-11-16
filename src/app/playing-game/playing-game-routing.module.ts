import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayingGamePage } from './playing-game.page';

const routes: Routes = [
  {
    path: '',
    component: PlayingGamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayingGamePageRoutingModule {}
