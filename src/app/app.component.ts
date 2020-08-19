import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diaries:string[];

  constructor(){
    this.diaries = ['Visited Lake Nakuru park', 'Sweet moments at Diani beach', 'Graduated from Moringa School']
  } 
}