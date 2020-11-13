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
  ClosePopover() {
    this.popover.dismiss();
  }

  onGetValue(event) {
    this.inputName = (<HTMLInputElement>event.target).value; 
    this.inputName.replace(/ /g,'');
    if(this.inputName != null && this.inputName != " "){
      this.validName = true;
    }
      else{
        this.validName=false;
      }
}

  setName(){   
     if(this.inputName != null || this.inputName != ""){
      this.playerInfo.changeName(this.inputName);
      this.router.navigate(['/add-words'])
    }    

    
  }  ngOnInit() {}
  
}
