import { Component, AfterViewInit, ElementRef, ViewChild, Query } from '@angular/core';
import { Gesture, GestureController, IonButton, IonCard } from '@ionic/angular';
import { ServerService } from '../server.service';
import { AlertController } from '@ionic/angular';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-playing-game',
  templateUrl: './playing-game.page.html',
  styleUrls: ['./playing-game.page.scss'],
})
export class PlayingGamePage implements AfterViewInit {  

  @ViewChild(IonButton,{read: ElementRef}) card: ElementRef;
  
  longpressActive = false;
  constructor(
    private gestureCtrl: GestureController,
    private server : ServerService,
    private alertController: AlertController) {    
   
  } 
  message: string = '?';
  lastguess: string = 'placeholder';
  fakeartistMEssage = 'You are the fake artist';
  twoPLayersMEssage = ''
  ngOnInit() {
   
  
  } 
  

  async showPrompt(nameOfPlayer:string) {    
       
    var i= 0;
        this.server.roomInfo.players.forEach(player => {
          if(player.guessed){
            i+= 1;
          }
          if(i == 2){
            this.twoPLayersMEssage = 'Only two players remain, no matter who you guess the round will end and the Fake artist can guess the title';
          }
        }) 

    const prompt = await this.alertController.create({  
      
      header: 'Accuse '+ nameOfPlayer + ' of being the fake Artist ?', 
      message:this.twoPLayersMEssage,
      inputs:[],   
      buttons: [
        {
          text: 'confirm',
          handler: data => {
            this.server.guessArtist(nameOfPlayer);
            this.lastguess = nameOfPlayer;
            console.log('guessed nameOfPlayer');
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


  useLongPress(cardEl){   
    const card = cardEl;
      console.log('utton:',cardEl);

      const gesture: Gesture = this.gestureCtrl.create({
        el: card.nativeElement,       
        gestureName: 'long-press',
        threshold: 0,
        onStart: ev => {
          console.log('press');
          this.longpressActive = true;
          if(this.server.roomInfo.artist != this.server.roomInfo.playerName){
            this.message = 'The Title is ' + this.server.roomInfo.word;
          }
          else{
            this.message = this.fakeartistMEssage;
          }
         
        },
        onEnd: ev => {
          console.log('notpress')
          this.longpressActive = false;
          this.message = '?';
        },
      },true);
      // The `true` above ensures that callbacks run inside NgZone.
      gesture.enable(true);

    }

    ngAfterViewInit(){
      const cardEl = this.card;
      this.useLongPress(cardEl);
    }

}
