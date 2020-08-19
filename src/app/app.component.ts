import { Component } from '@angular/core';
import { Diary } from './diary';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  diaries:Diary[] = [
    {id:1, name:'Visited lake Nakuru with college friends'},
    {id:2,name:'Bought my first car'},
    {id:3,name:'Great times at Diani Beach'},
    {id:4,name:'Visited my long time friend Evans'},
    {id:5,name:'Graduated from Moringa school'},
    {id:6,name:'My wedding day! What did i say?? haha! Not serious though.'},
  ];
}
