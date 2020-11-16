import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ServerService } from './server.service';

import { fancyAnimation } from './animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot({animated:true}), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,    
    ServerService,    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
