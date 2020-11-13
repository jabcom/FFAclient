import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { AddWordPopComponent } from '../popovers/add-word-pop/add-word-pop.component';


@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.page.html',
  styleUrls: ['./add-words.page.scss'],
})
export class AddWordsPage {

  constructor(private popoverController: PopoverController) { }

  words: string[] = [];
  wordsLowerCase: string[] = [];

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component:  AddWordPopComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,       
                 
    }
    );    
   
    return await popover.present();
  }

  checkWords(){
    
    console.log(this.words);
  }


}
