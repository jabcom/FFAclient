import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuessTItlePageRoutingModule } from './guess-title-routing.module';

import { GuessTItlePage } from './guess-title.page';
import { TopbarComponent } from '../components/topbar/topbar.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuessTItlePageRoutingModule
  ],
  entryComponents: [TopbarComponent],
  declarations: [GuessTItlePage, TopbarComponent]
})
export class GuessTItlePageModule {}
