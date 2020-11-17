import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-scorboard',
  templateUrl: './scorboard.page.html',
  styleUrls: ['./scorboard.page.scss'],
})
export class ScorboardPage implements OnInit {

  constructor( private server: ServerService) { }

  scorenumbers:number[] = [1]
  topScore:number;
  topPLayers;
  scoremessage:string;

  ngOnInit() {

    this.server.roomInfo.players.forEach(player => {
      this.scorenumbers.push(player.score);
    });

   this.topScore = Math.max.apply(null,this.scorenumbers);     

   this.server.roomInfo.players.forEach(player => {
    if(player.score == this.topScore){
      this.topPLayers.push(player);
      }
    })
 
    if(this.topPLayers.lengh > 1 ){
      this.topPLayers.forEach(player => {
        this.scoremessage += player.name; +",";
      });
      this.scoremessage += ' are winning with ' + this.topScore + ' points';
    }
    else{
      this.scoremessage +=  this.topPLayers[0] + ' is winning with ' + this.topScore + ' points';
    }
    

  }

  


}
