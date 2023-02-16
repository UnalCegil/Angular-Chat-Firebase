import { Component } from '@angular/core';
import firebase from 'firebase/compat/app';

const config={
  apiKey:'',
  databaseURL:''
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chat';
  constructor(){
    firebase.initializeApp(config);
  }
}
