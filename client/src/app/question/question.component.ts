import {Component, OnDestroy, OnInit} from '@angular/core';
import {Question} from '../model/question.interface';
import {questionJson} from '../mocks/questions-mock';
import {Answer} from '../model/answer.interface';
import {QuestionsService} from '../questions.service';
import 'rxjs/operator/take';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit, OnDestroy {

  questions: Question[];
  question: Question;
  private _subscriptions: Subscription;
  constructor(private questionsService: QuestionsService) { }

  ngOnDestroy() {
    if (this._subscriptions) {
      this._subscriptions.unsubscribe();
    }
  }
  ngOnInit() {

  this._subscriptions; this.questionsService.getCurrentQuestion().subscribe( questions => {
    console.log('question', questions)
    this.questions = questions;
    this.question = questions[0];
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

  answer() {
    const index = (this.questions.indexOf(this.question) + 1) % this.questions.length;
    this.question = this.questions[index];
  }

}
