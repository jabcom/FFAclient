import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseCatagoryPageRoutingModule } from './choose-catagory-routing.module';

import { ChooseCatagoryPage } from './choose-catagory.page';
import { TopbarComponent } from '../components/topbar/topbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseCatagoryPageRoutingModule,    
  ],
  entryComponents: [TopbarComponent],
  declarations: [ChooseCatagoryPage,TopbarComponent]
})
export class ChooseCatagoryPageModule {}
