import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { version } from 'process';

import { MenuController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';
import { PlayerInfoService} from './player-info.service';

import { ServerService } from './server.service';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent { navigate: any; menu:MenuController;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController:AlertController,
    private playerInfo: PlayerInfoService,
    private server: ServerService,
    private router: Router,
    private toastController: ToastController
  ) {
    this.initializeApp();
  }
  versionNumer: string = "V0.0.2";
  playerName: string = "Dave";
  emitSubscription : any;
  ngOnInit() {
    this.server.getServerInfo();
    this.emitSubscription = this.server.getWarningMessageEmitter().subscribe(item => this.showWarning(item));
    //this.server.moveToRoom(this.server.roomInfo.state);

  }
  ngOnDestroy() {
    this.emitSubscription.unsubscribe();
  }
  async showPrompt() {
    const prompt = await this.alertController.create({
      header: 'Change Name',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'Enter new name'
        },
      ],
      buttons: [
        {
          text: 'Save',
          handler: data => {
            this.playerName = data.title
            console.log('Save clicked');
            this.playerName.replace(/ /g,'');
            if(this.playerName != null || this.playerName != ""){
              this.playerInfo.changeName(this.playerName);
            }
            console.log(this.playerName);
          }
        },
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
      });
      await prompt.present();
    }

    async showWarning(text: string) {
      const toast = await this.toastController.create({
        message: text,
        duration: 2000,
        position: 'top',
        color: 'warning'
      });
      toast.present();
    }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}
