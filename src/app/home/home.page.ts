import { Component } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(public popoverController : PopoverController, private server : ServerService) {
  }
  createMenuOpen : boolean = false;
  validName: boolean = false;
  validRoom: boolean = false;
  inputName:string;
  wrongCode:boolean;
  inputRoom:string;
  nothingSelected:boolean;

  constructor(private server : ServerService) {}

  menuOpen(openOrNot:boolean){
    this.nothingSelected = openOrNot;
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
      this.inputRoom = (<HTMLInputElement>event.target).value.toUpperCase(); 
      if(this.inputRoom.length == 4){
          this.validRoom = true;
        } else {
          this.validRoom = false;
        }
      }

    
  setName(isHost:boolean){
    if(this.createMenuOpen){
      if(this.inputName != null || this.inputName != ""){
        server.createRoom(this.inputName);
      }
    } else {
        if(this.inputName != null || this.inputName != ""){
          server.joinRoom(this.inputName, input.inputRoom);     
         }     
    } 
  }
}
