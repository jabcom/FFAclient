import { Component, OnInit } from '@angular/core';
import { PopoverController } from "@ionic/angular";
import{ TitleWordsService} from '../../title-words.service';


//  public ngForm:NgForm import {NgForm} from '@angular/forms';



@Component({
  selector: 'app-add-word-pop',
  templateUrl: './add-word-pop.component.html',
  styleUrls: ['./add-word-pop.component.scss'],
})
export class AddWordPopComponent implements OnInit {

  persoon: any;
  inputWord: string;
  wordAlreadyAdded: boolean;
  inputWordLowerCase: string;
  words: string[] = [];
  wordsLowerCase: string[] = [];
  constructor (private popover: PopoverController, 
              private titleWordService:TitleWordsService
  ) { }

  ClosePopover() {
    this.popover.dismiss();
  }
  onGetValue(event) {
    this.inputWord = (<HTMLInputElement>event.target).value;  
    this.wordAlreadyAdded = false;    
}
  addWord(){
    if(this.inputWord!= null || this.inputWord!=""){
    this.inputWordLowerCase = this.inputWord.toLowerCase();
    this.inputWordLowerCase = this.inputWordLowerCase.replace(/ /g,'');
    if(!this.wordsLowerCase.includes(this.inputWordLowerCase)){
      this.words.push(this.inputWord);
      this.wordsLowerCase.push(this.inputWordLowerCase);  
      this.titleWordService.addWords(this.words);    
      console.log(this.words);      
    }
    else{
      this.wordAlreadyAdded = true;      
      }    
    }
  }
  removeWord(wordToRemove:string){
    console.log(this.words)
    let wordIndex = this.words.indexOf(wordToRemove)
    this.words.splice(wordIndex, 1); 
  }

  ngOnInit(){
    this.words = this.titleWordService.getWords()
  }

}

