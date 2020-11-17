import { Component, OnInit } from '@angular/core';
import { PopoverController } from "@ionic/angular";

@Component({
  selector: 'app-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.scss'],
})
export class ServerInfoComponent implements OnInit {

  constructor(private popover: PopoverController) { }

  ClosePopover() {
    this.popover.dismiss();
  }

  ngOnInit() {}

}
