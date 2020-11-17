import { Injectable, EventEmitter } from '@angular/core';
import { io } from 'socket.io-client';
import {Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor( public router: Router) {
    this.connect();
  };

  warningMessage = new EventEmitter<String>();
  getWarningMessageEmitter(){
    return this.warningMessage;
  }

  private socket;

  //private url = 'http://192.168.50.224:3000';
  private url = 'https://ffaserver-egzle5ktia-nw.a.run.app';
  //public url = "http://127.0.0.1:3000";
  public serverInfo: any = {
    name: "",
    version: "",
    minWords: 3,
    connected: false
  };
  public roomInfo: any = {
    id: "",
    host: "",
    state: -1,
    category: "",
    playerName: "",
    players: [],
    lastArtist: "",
    minWords: "",
    word: "",
    artist: "",
    categorys: [],
    wordList: []
  }
  public inRoom: boolean = false;
  public isHost: boolean = false;
  public playerName: string = "";

  public getServerInfo() {
    this.socket.emit('serverInfo');
  }

  public createRoom(name: string) {
    this.socket.emit('createRoom', {playerName: name});
  }

  public joinRoom(name: string, roomID : string) {
    this.socket.emit('joinRoom', {playerName: name, roomID: roomID});
  }

  public setCategory(category: string) {
    this.socket.emit('setCategory', {category: category});
    console.log(category)
  }

  public setWordList(wordList: string[]) {
    this.socket.emit('setWordList', {wordList: wordList});
  }

  public changeName(name: string) {
    this.socket.emit('changeName', {newName: name});
  }

  public changeHost(name: string) {
    this.socket.emit('changeHost', {newHost: name});
  }

  public changeScore(name: string, score: number) {
    this.socket.emit('changeScore', {playerName: name, newScore: score});
  }

  public kickPlayer(name: string) {
    this.socket.emit('kickPlayer', {playerName: name});
  }

  public guessArtist(name: string) {
    this.socket.emit('guessArtist', {playerName: name});
  }

  public resetGameWithScores()  {
    this.socket.emit('newGame', {keepScores: true});
  }

  public resetGameWithoutScores() {
    this.socket.emit('newGame', {keepScores: false});
  }

  public startGame() {
    this.socket.emit('startGame');
  }

  public noMajority() {
    this.socket.emit('moMajority');
  }

  public guessWord(wasCorrect: boolean) {
    this.socket.emit('guessWord', {wasCorrect: wasCorrect});
  }

  public connect() {
    console.log("connecting")
    this.socket = io(this.url, {transports: ['polling']});

    //Setup listners
    //serverInfo
    this.socket.on('serverInfo', (data : any) => {
      this.serverInfo = data;
      if (this.serverInfo.name != "") {
        this.serverInfo.connected = true;
      } else {
        this.serverInfo.connected = false;
      }
      if (this.serverInfo.host == this.playerName) {
        this.isHost == true;
      } else {
        this.isHost == false;
      }
      this.serverInfo.url = this.url;
      console.log(this.serverInfo);
    });

    //roomInfo
    this.socket.on('roomInfo', (data : any) => {
      //Check for game state change
      if (this.roomInfo.state != data.state) {
        this.roomInfo = data;
        this.moveToRoom(data.state);
      } else {
        this.roomInfo = data;
      }

      //Set player name
      this.playerName = this.roomInfo.playerName;

      //Set in room
      if (this.roomInfo.id != "") {
        this.inRoom = true;
        if (this.playerName == this.roomInfo.host) {
          this.isHost = true;
        }
      } else {
        this.inRoom = false;
      }

      //Set Waiting On Words
      if (this.roomInfo.state == 1) {
        let waitingCount : number = 0;
        let waitingFor : string = "";
        for (let i : number = 0; i < this.roomInfo.players.length; i++) {
          if (this.roomInfo.players[i].state == 1) {
            waitingCount += 1;
            waitingFor = this.roomInfo.players[i].name;
          }
        }
        if (waitingCount > 1) {
          this.roomInfo.waitingFor = waitingCount.toString() + " players";
        } else {
          this.roomInfo.waitingFor = waitingFor;
        }
      }
      console.log(this.roomInfo);
    });

    //showError
    this.socket.on('showError', (data : any) => {
      if (data.type != null) {
        switch(data.type){
          case 0 :
            //Popup
            break;
          case 1 :
            //Room code invalid
            //Do stuff
            break;
        }
      }
      this.warningMessage.emit(data.message);
      console.log(data);
    });
  }

  public moveToRoom(state: number) {
    console.log(state);
    switch (state) {
      case -1:
        this.router.navigate(['/home'])
        break;
      case 0:
        this.router.navigate(['/choose-catagory'])
        break;
      case 1:
        this.router.navigate(['/add-words'])
        //switch to adding words
        break;
      case 2:
        this.router.navigate(['/playing-games'])
        //switch to playing game
        break;
      case 3:
        //switch to artist guessed
        break;
      case 4:
        //switch to word guessed
        break;
    }
  }

}
