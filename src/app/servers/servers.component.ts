import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: 'app-servers',
  selector: 'app-servers',
  
  //template: '<app-server></app-server> <app-server></app-server>',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  AllowNewServer=false;
  serverCreationStatus="No server was created!";
ServerName="Testserver";
serverCreated=false;
servers=['Testserver', 'Testserver 2'];

  constructor() { 
    setTimeout( () => {
      this.AllowNewServer=true;
    }, 2000); 
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated=true;
    this.servers.push(this.ServerName);
  this.serverCreationStatus="server was created! Name is" +this.ServerName;
}
onUpdateServerName(event: Event) {
 this.ServerName=(<HTMLInputElement>event.target).value;
}

}
