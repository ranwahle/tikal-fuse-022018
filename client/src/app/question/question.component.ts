import { Component, OnInit } from '@angular/core';
import {Question} from '../model/question.interface';
import {questionJson} from '../mocks/questions-mock';
import {Answer} from '../model/answer.interface';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question: Question;
  constructor() { }

  ngOnInit() {

    this.question = questionJson.questions[0];
  }

  setSelected(answer: Answer) {
    this.question.answers.forEach(ans => ans.isSelected = false);
    answer.isSelected = true;
  }

}
