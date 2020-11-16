import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { fancyAnimation } from './animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AddWordPopComponent} from './popovers/add-word-pop/add-word-pop.component';
import {CreateNamePopComponent} from './popovers/create-name-pop/create-name-pop.component';
import {HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG} from '@angular/platform-browser';


@NgModule({
  declarations: [AppComponent, AddWordPopComponent,CreateNamePopComponent],
  entryComponents: [AddWordPopComponent,CreateNamePopComponent],
  imports: [BrowserModule, IonicModule.forRoot({animated:true}), AppRoutingModule,HammerModule],
  providers: [
    StatusBar,
    SplashScreen,
    
    {provide: HAMMER_GESTURE_CONFIG, useClass: HammerGestureConfig}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
