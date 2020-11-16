import { Component, AfterViewInit, ElementRef, ViewChild, Query } from '@angular/core';
import { Gesture, GestureController, IonButton, IonCard } from '@ionic/angular';
import { ServerService } from '../server.service';


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
    private server : ServerService) {    
   
  } 
  message: string = '?';
  fakeartistMEssage = 'You are the fake artist'
  
  ngOnInit() {
  }

  useLongPress(cardEl){   
    const card = cardEl;
      console.log('utton:',cardEl);

      const gesture: Gesture = this.gestureCtrl.create({
        el: card.nativeElement,       
        gestureName: 'long-press',
        threshold: 0,
        onStart: ev => {
          console.log('press')
          this.longpressActive = true;
          if(this.server.roomInfo.artist == this.server.roomInfo.playerName){
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
