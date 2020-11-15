import { Component } from '@angular/core';
import { PopoverController } from "@ionic/angular";
import{ PlayerInfoService} from '../../player-info.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-create-name-pop',
  templateUrl: './create-name-pop.component.html',
  styleUrls: ['./create-name-pop.component.scss'],
})
export class CreateNamePopComponent {

  constructor(private popover: PopoverController, 
              private playerInfo: PlayerInfoService,
              private router: Router)  { }
  inputName: string;
  validName:boolean;
  isHost:boolean;
  askedForRoomCode:boolean;
  ClosePopover() {
    this.popover.dismiss();
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
        this.askedForRoomCode= true;  
        //this.router.navigate(['/choose-catagory'])     
      }     
  }
}

  ngOnInit() {
    this.isHost = this.playerInfo.getHost();
  }
  
}
