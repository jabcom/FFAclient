import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KickModelPage } from './kick-model.page';

const routes: Routes = [
  {
    path: '',
    component: KickModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KickModelPageRoutingModule {}
