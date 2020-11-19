import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KickModelPageRoutingModule } from './kick-model-routing.module';

import { KickModelPage } from './kick-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KickModelPageRoutingModule
  ],
  declarations: [KickModelPage]
})
export class KickModelPageModule {}
