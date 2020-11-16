import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerService } from '../server.service';



@Component({
  selector: 'app-choose-catagory',
  templateUrl: './choose-catagory.page.html',
  styleUrls: ['./choose-catagory.page.scss'],
})
export class ChooseCatagoryPage {

  constructor( private server : ServerService,)  {     
  }

  
  catInput:string;  
  catInputNoSpaces:string;
  currentCatagory:string = '...'; 
  setCatagory:boolean;

  /*
  onGetValue(event) {
    //this.catInput = (<HTMLInputElement>event.target).value;
    this.catInputNoSpaces =this.catInput.replace(/ /g,'');
    if(this.catInputNoSpaces!= null && this.catInputNoSpaces!=""){ 
      this.currentCatagory = this.catInput.trim();
      this.server.setCategory(this.currentCatagory); 
      console.log(this.currentCatagory);
    }
    else{
      this.currentCatagory = '...';
    }  
  }
  */
 
 onGetValue() {
  this.catInput = (<HTMLInputElement>event.target).value;
  this.catInputNoSpaces =this.catInput.replace(/ /g,'');
  if(this.catInputNoSpaces!= null && this.catInputNoSpaces!=""){ 
    this.currentCatagory = this.catInput.trim();    
    this.server.setCategory(this.currentCatagory); 
    this.setCatagory = true;
    console.log(this.currentCatagory);
  }
  else{
    this.currentCatagory = '...';
    this.setCatagory = true;
    this.server.setCategory(this.currentCatagory); 
  }  
}
  getRandomCatagory(){
    this.currentCatagory = this.server.roomInfo.categorys[Math.floor
      (Math.random()*this.server.roomInfo.categorys.length)]; 
      this.setCatagory = true;
      this.server.setCategory(this.currentCatagory);    
      this.catInput = " ";
  }

  startGame(){
    this.server.startGame(); 
  }

}
