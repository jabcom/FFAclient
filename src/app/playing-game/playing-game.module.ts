import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayingGamePageRoutingModule } from './playing-game-routing.module';

import { PlayingGamePage } from './playing-game.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayingGamePageRoutingModule
  ],
  declarations: [PlayingGamePage]
})
export class PlayingGamePageModule {}
