import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {public  alertController: AlertController;

  constructor() {}

  async showPrompt() {
    const prompt= await this.alertController.create({
      header: 'insert text',
      message: 'enter text',
      inputs: [
        {
          name: 'itemtext',
          placeholder: 'enter text'
        }
      ],
      buttons: [{
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: (data:any) => {
            if(data.itemtext==""){
              prompt.message = "text should not be empty";
              return false;
            }
            else{
              console.log(data.itemtext);
            }
          }
        }
      ]
    });
    await prompt.present();
  }
   

}
