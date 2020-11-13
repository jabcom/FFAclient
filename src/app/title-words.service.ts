import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleWordsService {

  constructor() { }

  words: string[] = []; 

  getWords():string[]{
        return this.words;
  }
  addWords(wordsAdded:string[]){
    this.words = wordsAdded;
  }
}
