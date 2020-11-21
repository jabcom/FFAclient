import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TopbarComponent } from '../components/topbar/topbar.component';
import { IonicModule } from '@ionic/angular';

import { AddWordsPageRoutingModule } from './add-words-routing.module';

import { AddWordsPage } from './add-words.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddWordsPageRoutingModule
  ],
  entryComponents: [],
  declarations: [AddWordsPage]
})
export class AddWordsPageModule {}
