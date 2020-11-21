import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-scorboard',
  templateUrl: './scorboard.page.html',
  styleUrls: ['./scorboard.page.scss'],
})
export class ScorboardPage implements OnInit {

  constructor( public server: ServerService) { }

  scorenumbers:number[] = [1]
  topScore:number;
  topPLayers: any = [];
  scoremessage:string = "";

  ngOnInit() {

    this.server.roomInfo.players.forEach(player => {
      this.scorenumbers.push(player.score);
    });

   this.topScore = Math.max.apply(null,this.scorenumbers);

console.log(this.topScore);

   var i;
   for (i = 0; i < this.server.roomInfo.players.length; i++) {
    if(this.server.roomInfo.players[i].score == this.topScore){
      this.topPLayers.push({
        name: this.server.roomInfo.players[i].name,
        score: this.server.roomInfo.players[i].score
      });
      console.log(this.topPLayers);
        //this.topPLayers[this.topPLayers.length-1].name = this.server.roomInfo.players[i].name;
        //this.topPLayers[this.topPLayers.length-1].score = this.server.roomInfo.players[i].score;
   }
    /*
   this.server.roomInfo.players.forEach(player => {
    if(player.score == this.topScore){
      this.topPLayers.push(player.name, player.score);
      }
    }
    )
  */}

    if(this.topPLayers.length > 1 ){
      this.topPLayers.forEach(player => {
        this.scoremessage += player.name +", ";
      });
      this.scoremessage += ' are winning with ' + this.topScore + ' points';
    }
    else{
      this.scoremessage +=  this.topPLayers[0].name + ' is winning with ' + this.topScore + ' points';
    }


  }




}
