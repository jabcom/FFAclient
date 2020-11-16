import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import {Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor( public router: Router) {
    this.connect();
  };
  //private socket: SocketIOClient.Socket;
  private socket;
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
      console.log(this.serverInfo);
    });

    //roomInfo
    this.socket.on('roomInfo', (data : any) => {
      //Check for game state change
      if (this.roomInfo.state != data.state) {
        this.roomInfo = data;
        switch (data.state) {
          case 0:
            this.router.navigate(['/choose-catagory'])
            break;
          case 1:
            this.router.navigate(['/add-words'])
            //switch to adding words
            break;
          case 2:
            //switch to playing game
            break;
          case 3:
            //switch to artist guessed
            break;
          case 4:
            //switch to word guessed
            break;
        }
      } else {
        this.roomInfo = data;
      }
      this.playerName = this.roomInfo.playerName;
      if (this.roomInfo.id != "") {
        this.inRoom = true;
        if (this.playerName == this.roomInfo.host) {
          this.isHost = true;
        }
      } else {
        this.inRoom = false;
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
      console.log(data);
    });
  }

}
