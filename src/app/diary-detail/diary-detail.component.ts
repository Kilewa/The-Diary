import { Component, OnInit , Input,Output} from '@angular/core';
import { Diary } from '../diary';

@Component({
  selector: 'app-diary-detail',
  templateUrl: './diary-detail.component.html',
  styleUrls: ['./diary-detail.component.css']
})
export class DiaryDetailComponent implements OnInit {

  @Input() diary: Diary;



  @Output() deleteRequest = new EventEmitter<diary>();

  delete() {
    this.deleteRequest.emit(this.diary);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
