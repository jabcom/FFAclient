import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ServerService } from '../../server.service';
import { ServerInfoComponent } from '../../popovers/server-info/server-info.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  constructor(private server : ServerService, private popover: PopoverController) { }

  async showServerInfo(ev: any) {
    const pop = await this.popover.create({
      component: ServerInfoComponent,
      //cssClass: 'my-custom-class',
      translucent: false,
      event: ev,
      componentProps: {
        "serverInfoPassed": this.server.serverInfo
      }
    });
    return await pop.present();
  }
}
