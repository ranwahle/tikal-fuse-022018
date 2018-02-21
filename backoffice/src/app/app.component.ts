import {Component, OnDestroy, OnInit} from '@angular/core';
import {AnswersService} from './answers.service';
import {Subscription} from 'rxjs/Subscription';
import {AnswerByUser} from './model/answer-by-user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  private subscription: Subscription;
  displayedColumns = ['username', 'questiontext', 'answertext', 'correct'];
  answers: AnswerByUser[];
  constructor(private answersService: AnswersService) {

  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {
    const observable = this.answersService.getAnswers();
    this.subscription = observable.subscribe(answers => {
      console.log('answers', answers);
      this.answers = <AnswerByUser[]>answers;
    })
  }
}
