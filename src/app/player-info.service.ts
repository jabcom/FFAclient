import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerInfoService {

  constructor() { }
  playerName:string;

  changeName(newName:string){
    this.playerName = newName;
    console.log("players name is now " + this.playerName)
  }
}
