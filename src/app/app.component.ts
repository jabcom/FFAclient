import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { MenuController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';

import { KickModelPage } from './kick-model/kick-model.page';

import { ServerService } from './server.service';

import { ToastController } from '@ionic/angular';

import { TopbarComponent } from './components/topbar/topbar.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent { navigate: any; menu:MenuController;
  constructor(
    public platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public alertController:AlertController,
    private server: ServerService,
    public modalController: ModalController,

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
    this.server.moveToRoom(this.server.roomInfo.state);
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: KickModelPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


  async leaveRoomPrompt() {
    const prompt = await this.alertController.create({
      header: 'Leave Room?',
      buttons: [
        {
          text: 'yes',
          handler: data => {
            this.server.leaveRoom();
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


  ngOnDestroy() {
    this.emitSubscription.unsubscribe();
  }
  async changeNamePrompt() {
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
              this.server.changeName(this.playerName);
            }
            console.log(this.playerName);
            //this.menu.close();
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
