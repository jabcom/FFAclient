import { Component, OnInit } from '@angular/core';
import { PopoverController } from "@ionic/angular";
import{ PlayerInfoService} from '../../player-info.service';

@Component({
  selector: 'app-create-name-pop',
  templateUrl: './create-name-pop.component.html',
  styleUrls: ['./create-name-pop.component.scss'],
})
export class CreateNamePopComponent implements OnInit {
  private inputName: string

  constructor(private popover: PopoverController,
              private playerInfo: PlayerInfoService) { }

  ClosePopover() {
    this.popover.dismiss();
  }

  onGetValue(event) {
    this.inputName = (<HTMLInputElement>event.target).value;
  }

  setName(){
    this.inputName.replace(/ /g,'');
    this.popover.dismiss();
  }

ngOnInit() {}

}
