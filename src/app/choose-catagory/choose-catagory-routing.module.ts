import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseCatagoryPage } from './choose-catagory.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseCatagoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseCatagoryPageRoutingModule {}
