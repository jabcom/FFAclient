import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CreateNamePopComponent } from '../popovers/create-name-pop/create-name-pop.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isOnline: boolean = true;
  constructor(public popoverController:PopoverController) {}

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component:  CreateNamePopComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,       
                 
    }
    );    
   
    return await popover.present();
  }
   

}
