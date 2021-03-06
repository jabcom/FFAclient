import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-add-words',
  templateUrl: './add-words.page.html',
  styleUrls: ['./add-words.page.scss'],
})
export class AddWordsPage implements OnInit {


  constructor( public server : ServerService) { }

  words: string[] = [];
  wordsLowerCase: string[] = [];
  inputWord:string;
  inputWordLowerCase:string;
  wordAlreadyAdded: boolean

  onGetValue(event) {
    this.inputWord = (<HTMLInputElement>event.target).value.replace(/ /g,'');;  
    this.wordAlreadyAdded = false;
}
  addWord(){
    if(this.inputWord!= null && this.inputWord!="" && this.words.length < 3){
    this.inputWordLowerCase = this.inputWord.toLowerCase();
    this.inputWordLowerCase = this.inputWordLowerCase.replace(/ /g,'');
    if(!this.wordsLowerCase.includes(this.inputWordLowerCase)){
      this.words.push(this.inputWord);
      this.wordsLowerCase.push(this.inputWordLowerCase);
     // this.titleWordService.addWords(this.words);
      console.log(this.words);
      this.server.setWordList(this.words);
    }
    else{
      this.wordAlreadyAdded = true;
      }
    }
  }
  removeWord(wordToRemove:string){
      let wordIndex = this.words.indexOf(wordToRemove)
      let lowerWordIndex= this.wordsLowerCase.indexOf(wordToRemove.toLowerCase());
    this.words.splice(wordIndex, 1);
    this.wordsLowerCase.splice(lowerWordIndex,1);
    this.server.setWordList(this.words);
    console.log(this.words);
    console.log(this.wordsLowerCase);
  }

  ngOnInit(){
   //this.words = this.titleWordService.getWords()


  }

}
