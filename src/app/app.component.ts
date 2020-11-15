import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { version } from 'process';

import { MenuController } from '@ionic/angular';

import { AlertController } from '@ionic/angular';
import { PlayerInfoService} from './player-info.service';

import { ServerService } from './server.service';

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
    private server: ServerService
  ) {
    this.initializeApp();
    this.sideMenu();
  }
  versionNumer: string = "V0.0.2";
  isHost: boolean = true;
  playerName: string;
  ngOnInit() {
    this.server.getServerInfo();
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
    handler: data => { this.playerName = data.title

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

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  changeHost(HostOrNot: boolean){
    this.isHost = HostOrNot;
    this.sideMenu();
  }

  sideMenu(){
    if(this.isHost)
    {
      this.navigate =[
        {
        title : 'Scores',
          url : '/home',
          icon : 'easel-outline'
        },
        {
          title : 'Rules',
          url : '/home',
          icon : 'school-outline'
        }        ,
        {
          title : 'Kick Player',
          url : '/home',
          icon : 'person-outline'
        },
        {
          title : 'Change Host',
          url : '/home',
          icon : 'people-outline'
        },
        {
        title : 'Reset Scores',
          url : '/home',
          icon : 'easel-outline'
        },
        {
          title : 'Leave Room',
            url : '/home',
            icon : 'exit-outline'
          },
          {
          title : 'Quit',
            url : '/home',
            icon : 'close-circle-outline'
          }
      ]
    }
    else{
      this.navigate =[
        {
        title : 'Scores',
          url : '/home',
          icon : 'easel-outline'
        },
        {
          title : 'Rules',
          url : '/home',
          icon : 'school-outline'
        },
        {
        title : 'Leave Room',
          url : '/home',
          icon : 'exit-outline'
        },
        {
        title : 'Quit',
          url : '/home',
          icon : 'close-circle-outline'
        }
      ]
    }
  }
}
