import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import{ PlayerInfoService} from '../player-info.service';

@Component({
  selector: 'app-choose-catagory',
  templateUrl: './choose-catagory.page.html',
  styleUrls: ['./choose-catagory.page.scss'],
})
export class ChooseCatagoryPage implements OnInit {

  constructor(private router: Router,
    private playerInfo: PlayerInfoService,)  { }

  isHost:boolean;
  catInput:string;
  playersJoinedArray: string[] = ['Jimmy','fuzzyRick','ArseBlast', 'Swimming captin'];
  catInputNoSpaces:string;
  currentCatagory:string = '...';
  catagoryArray: string[] = ['monsters','fuzzy animals','teenage heart Throbs', 'national monuments'];

  ngOnInit() {
    this.isHost = this.playerInfo.getHost();
  }

  onGetValue(event) {
    this.catInput = (<HTMLInputElement>event.target).value;
    this.catInputNoSpaces =this.catInput.replace(/ /g,'');
    if(this.catInputNoSpaces!= null && this.catInputNoSpaces!=""){ 
      this.currentCatagory = this.catInput.trim();
      console.log(this.catInput);
    }
    else{
      this.currentCatagory = '...';
    }  
  }
  getRandomCatagory(){
    this.currentCatagory = this.catagoryArray[Math.floor(Math.random()*this.catagoryArray.length)];
    
  }

  startGame(){
    this.router.navigate(['/add-words'])
  }

}
