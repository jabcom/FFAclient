import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ServerService } from '../server.service';



@Component({
  selector: 'app-kick-model',
  templateUrl: './kick-model.page.html',
  styleUrls: ['./kick-model.page.scss'],
})
export class KickModelPage implements OnInit{



  constructor(public server:ServerService, public alertController:AlertController, public modalController:ModalController,) {   
   }

  async kickPlayerPrompt(name:string) {

    console.log('kick attempted');
    const prompt = await this.alertController.create({
      header: 'Kick ' + name + "?",       
      buttons: [
        {
          text: 'yes',
          handler: data => {              
         this.server.kickPlayer(name); 
            this.modalController.dismiss();
         }
        },
       {
          
          text: 'Cancel',
          handler: data => {  
          }
          
        }
      ]
      });
      await prompt.present();
    }

ngOnInit(){
  console.log(this.server.modalPage)
}

dismiss(){
  this.modalController.dismiss();
}

async changeHostPrompt(name:string) {
 
  const prompt = await this.alertController.create({
    header: 'Make ' + name + " host?",       
    buttons: [
      {
        text: 'yes',
        handler: data => {              
       this.server.changeHost(name); 
       this.modalController.dismiss();
       }
      },
     {
        
        text: 'Cancel',
        handler: data => {  
        }
        
      }
    ]
    });
    await prompt.present();
  }

}
