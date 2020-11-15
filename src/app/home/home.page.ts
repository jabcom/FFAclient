import { Component } from '@angular/core';
import{ PlayerInfoService} from '../player-info.service';
import {Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isOnline: boolean = true;
  isHost: boolean;
  validName: boolean;
  debugRoomCode: string = "q2w3";
  validRoom: boolean;
  inputName:string;
  wrongCode:boolean;
  inputRoom:string;
  nothingSelected:boolean;

  constructor(
    public playerInfo: PlayerInfoService,
    public router: Router) {}


  setToHost(hostOrNot:boolean){
    this.isHost = hostOrNot;   
    this.playerInfo.changeHost(hostOrNot);
  }

  menuOpen(openOrNOt:boolean){
    this.nothingSelected = openOrNOt;
  }
   
  onGetValue(event) {
    this.inputName = (<HTMLInputElement>event.target).value.replace(/ /g,'');; 
    
      if(this.inputName != null && this.inputName != ""){
      this.validName = true;
    }
      else{
        this.validName=false;
      }
  }


    onGetRoomCode(event){     
      this.inputRoom = (<HTMLInputElement>event.target).value.toLowerCase(); 
      if(this.inputRoom.length == 4){
        if(this.inputRoom == this.debugRoomCode){  
          this.validRoom = true;
        }    
        else{
          this.validRoom =false;
          this.wrongCode = true;
        }
      }
      else{
        this.wrongCode = false;
      }
    
  }

    
  setName(isHost:boolean){
    
    if(this.isHost){

      if(this.inputName != null || this.inputName != ""){
        this.playerInfo.changeHost(true);
        this.playerInfo.changeName(this.inputName);
        this.router.navigate(['/choose-catagory'])
      }
    }
      else{
        if(this.inputName != null || this.inputName != ""){
          this.playerInfo.changeHost(false);
          this.playerInfo.changeName(this.inputName);     
          this.router.navigate(['/choose-catagory'])     
            }     
          } 
  }



}
