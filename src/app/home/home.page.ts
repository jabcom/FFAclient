import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { CreateNamePopComponent } from '../popovers/create-name-pop/create-name-pop.component';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(public popoverController : PopoverController, private server : ServerService) {
  }

  playerName : string = "";
  roomID : string = "";
  private showNewGameMenu : boolean = false;
  private showJoinGameMenu : boolean = false;

  showNewGame() {
    this.showNewGameMenu = true;
    this.showJoinGameMenu = false;
  }

  showJoinGame() {
    this.showNewGameMenu = false;
    this.showJoinGameMenu = true;
  }

  createGame() {
    this.server.createRoom(this.playerName);
  }
}
