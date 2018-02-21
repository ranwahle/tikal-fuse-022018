import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {AngularFirestore} from 'angularfire2/firestore';
import {Question} from './model/question.interface';
import {AuthenticationService} from './authentication.service';
import {Answer} from './model/answer.interface';

@Injectable()
export class QuestionsService {

  constructor(private db: AngularFirestore, private authService: AuthenticationService) {
    // this.addQuestion();
  }

  addQuestion() {
    this.db.collection('quiz').add({
      Id: 1,
      text: 'When will the Fuze end?',
      answers: [{
        text: 'Whenever Assaf decides',
        isCorrect: true
      }, {
        text: 'The ones with the best presentation',
        isCorrect: false
      }, {
        text: `It won't`,
        isCorrect: false
      }, {
        text: 'Ask Shavit'
      }]
    });
  }

  async answer(question: Question, answer: Answer) {
    const user = await this.authService.getCurrentUser()
    this.db.collection('answers').add({
      question: question, user: user, answer: answer
    });
  }


  getCurrentQuestion(): Observable<any> {
    console.log('getting question');
    return this.db.collection('quiz').valueChanges().map(questions => {
      console.log('questions', questions);
      return questions.filter((question: any) => question.text && question.answers);
    });
    //   .    return  Observable.of( questionJson.questions[0]);
  }

}
