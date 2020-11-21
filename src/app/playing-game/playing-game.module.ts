import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayingGamePageRoutingModule } from './playing-game-routing.module';

import { PlayingGamePage } from './playing-game.page';
import { TopbarComponent } from '../components/topbar/topbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayingGamePageRoutingModule
  ],
  entryComponents: [],
  declarations: [PlayingGamePage]
})
export class PlayingGamePageModule {}
