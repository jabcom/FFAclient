import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';



@Component({
  selector: 'app-choose-catagory',
  templateUrl: './choose-catagory.page.html',
  styleUrls: ['./choose-catagory.page.scss'],
})
export class ChooseCatagoryPage implements OnInit {

  constructor( private server : ServerService,)  { 
    this.server.roomUpdateObserver.subscribe(      
      val => { this.currentroomInfo = val},)                //next callback
      if(this.currentroomInfo.host == this.currentroomInfo.playerName){
        this.isHost = true;
      }
      else{
        this.isHost = false;
        } 
      console.log(this.currentroomInfo) ;
  }

  isHost:boolean;
  catInput:string;
  currentroomInfo;
  catInputNoSpaces:string;
  currentCatagory:string = '...';
  catagoryArray: string[] = ['monsters','fuzzy animals','teenage heart Throbs', 'national monuments'];

  ngOnInit() { 
    
  }

  onGetValue(event) {
    this.catInput = (<HTMLInputElement>event.target).value;
    this.catInputNoSpaces =this.catInput.replace(/ /g,'');
    if(this.catInputNoSpaces!= null && this.catInputNoSpaces!=""){ 
      this.currentCatagory = this.catInput.trim();
      console.log(this.catInput);
    }
    else{
      this.currentCatagory = '...';
    }  
  }
  getRandomCatagory(){
    this.currentCatagory = this.catagoryArray[Math.floor(Math.random()*this.catagoryArray.length)];
    
  }

  startGame(){
    
  }

}
