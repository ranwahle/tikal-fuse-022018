import { Component, OnInit } from '@angular/core';
import {Question} from '../model/question.interface';
import {questionJson} from '../mocks/questions-mock';
import {Answer} from '../model/answer.interface';
import {QuestionsService} from '../questions.service';
import 'rxjs/operator/take';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question: Question;
  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
  this.questionsService.getCurrentQuestion().subscribe( question => {
    console.log('question', question)
    this.question = question
  });
  }

  setSelected(answer: Answer) {
    this.question.answers.forEach(ans => ans.isSelected = false);
    answer.isSelected = true;
  }

  get disabled() : boolean {
    return !this.question || !this.question.answers || !this.question.answers.find(a => a.isSelected)
  }

  get buttnText() : string {
    return this.disabled ? 'Pick an answer' : `That's my answer`;
  }

}
