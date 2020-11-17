import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScorboardPage } from './scorboard.page';

const routes: Routes = [
  {
    path: '',
    component: ScorboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScorboardPageRoutingModule {}
