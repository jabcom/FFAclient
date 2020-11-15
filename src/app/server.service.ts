import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  constructor() {
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
    state: "",
    category: "",
    players: [],
    lastArtist: "",
    minWords: "",
    word: "",
    artist: "",
    categorys: [],
    wordList: []
  }
  public inRoom: boolean = false;

  public getServerInfo() {
    this.socket.emit('serverInfo');
  }

  public createRoom(name: string) {
    this.socket.emit('createRoom', {playerName: name});
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
      console.log(this.serverInfo);
    });
    //roomInfo
    this.socket.on('roomInfo', (data : any) => {
      this.roomInfo = data;
      if (this.roomInfo.id != "") {
        this.inRoom = true;
      } else {
        this.inRoom = false;
      }
      console.log(this.roomInfo);
    });
    //showError
    this.socket.on('showError', (data : any) => {
      console.log(data);
    });
  }

}
