import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diaries:Diary[] = [
    {id:1, name:'Visited lake Nakuru .',description:'Had sweet times at Lake Nakuru with college friends'},
    {id:2,name:'Bought my first car.', description:'This is the day I picked my brand new car from Mombasa port'},
    {id:3,name:'Great times at Diani Beach.',description:'Visited Diani Beach with my girlfriend.What a time!!'},
    {id:4,name:'Visited my long time friend Evans.',description:'I met my long time friend after many years since high school'},
    {id:5,name:'Graduated from Moringa school.',description:'On this day, I graduated from Moringa school. Got certified as a professional software Developer'},
    {id:6,name:'My wedding day! What did i say?? haha! Not serious though.😄😄😄.',description:'I cant forget this day when i said i do. Am dreaming 😄😄😄😄😄'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
