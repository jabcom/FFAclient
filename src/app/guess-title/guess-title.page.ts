import { Component, AfterViewInit, ElementRef, ViewChild, Query } from '@angular/core';
import { Gesture, GestureController, IonButton, IonCard } from '@ionic/angular';
import { ServerService } from '../server.service';


@Component({
  selector: 'app-guess-title',
  templateUrl: './guess-title.page.html',
  styleUrls: ['./guess-title.page.scss'],
})
export class GuessTItlePage implements AfterViewInit {

  constructor(public server: ServerService,
    public gestureCtrl: GestureController) { }

  message: string = '?';
  fakeartistMEssage = 'You are the fake artist';


  @ViewChild(IonButton,{read: ElementRef}) card: ElementRef;


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
          console.log('press');
          if(this.server.roomInfo.artist != this.server.roomInfo.playerName){
            this.message = 'The Title is ' + this.server.roomInfo.word;
          }
          else{
            this.message = this.fakeartistMEssage;
          }

        },
        onEnd: ev => {
          console.log('notpress')
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
