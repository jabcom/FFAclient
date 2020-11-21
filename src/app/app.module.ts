import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ServerService } from './server.service';
import { KickModelPage } from'./kick-model/kick-model.page';

import { fancyAnimation } from './animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ServerInfoComponent } from './popovers/server-info/server-info.component';
import { TopbarComponent } from './components/topbar/topbar.component';

@NgModule({
  declarations: [AppComponent, ServerInfoComponent, TopbarComponent],
  entryComponents: [ServerInfoComponent],
  imports: [BrowserModule, IonicModule.forRoot({animated:true}), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    ServerService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
