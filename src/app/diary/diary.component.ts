import { Component, OnInit } from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
  diaries: Diary[] = [
    new Diary(1, 'Visited lake Nakuru .','Had sweet times at Lake Nakuru with college friends',new Date(2020,3,14)),
    new Diary(2,'Bought my first car.','This is the day I picked my brand new car from Mombasa port',new Date(2020,3,14)),
    new Diary(3,'Great times at Diani Beach.','Visited Diani Beach with my girlfriend.What a time!!',new Date(2020,3,14)),
    new Diary(4,'Visited my long time friend Evans.','I met my long time friend after many years since high school',new Date(2020,3,14)),
    new Diary(5,'Graduated from Moringa school.','On this day, I graduated from Moringa school. Got certified as a professional software Developer',new Date(2020,3,14)),
    new Diary(6,'My wedding day! What did i say?? haha! Not serious though.😄😄😄.','I cant forget this day when i said i do. Am dreaming 😄😄😄😄😄',new Date(2020,3,14)),
  ];
  addNewDiary(diary){
    let diaryLength = this.diaries.length;
    diary.id = diaryLength+1;
    diary.completeDate = new Date(diary.completeDate)
    this.diaries.push(diary)
  }
  toggleDetails(index){
    this.diaries[index].showDescription = !this.diaries[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
