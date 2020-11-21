import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuessTItlePageRoutingModule } from './guess-title-routing.module';

import { GuessTItlePage } from './guess-title.page';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuessTItlePageRoutingModule
  ],
  entryComponents: [],
  declarations: [GuessTItlePage]
})
export class GuessTItlePageModule {}
