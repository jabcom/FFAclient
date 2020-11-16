import { Component } from '@angular/core';
import { ServerService } from '../../server.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss'],
})
export class TopbarComponent {
  constructor(private server : ServerService) { }

}
