import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScorboardPageRoutingModule } from './scorboard-routing.module';

import { ScorboardPage } from './scorboard.page';
import { TopbarComponent } from '../components/topbar/topbar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScorboardPageRoutingModule
  ],
  entryComponents: [],
  declarations: [ScorboardPage]
})
export class ScorboardPageModule {}
