import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuessTItlePage } from './guess-title.page';

const routes: Routes = [
  {
    path: '',
    component: GuessTItlePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuessTItlePageRoutingModule {}
