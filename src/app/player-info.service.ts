import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerInfoService {

  constructor() { }
  playerName:string;
  isHost:boolean;


  getHost():boolean{
    return this.isHost;
  }

  changeHost(hostOrNot:boolean){
    this.isHost = hostOrNot;
  }

  changeName(newName:string){
    this.playerName = newName;
    console.log("players name is now " + this.playerName)
  }
}
