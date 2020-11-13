import { Component, OnInit } from '@angular/core';
import { PopoverController } from "@ionic/angular";
import{ PlayerInfoService} from '../../player-info.service';

@Component({
  selector: 'app-create-name-pop',
  templateUrl: './create-name-pop.component.html',
  styleUrls: ['./create-name-pop.component.scss'],
})
export class CreateNamePopComponent implements OnInit {

  constructor(private popover: PopoverController, 
              private playerInfo: PlayerInfoService) { }
  inputName: string;
  ClosePopover() {
    this.popover.dismiss();
  }

  onGetValue(event) {
    this.inputName = (<HTMLInputElement>event.target).value; 
}

  setName(){   
    this.inputName.replace(/ /g,'');

    if(this.inputName != null || this.inputName != ""){
      this.playerInfo.changeName(this.inputName);
    }    

    
  }  ngOnInit() {}
  
}
