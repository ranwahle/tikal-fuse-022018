import { Injectable } from '@angular/core';
import {questionJson} from './mocks/questions-mock';
import {Question} from './model/question.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class QuestionsService {

  constructor(private db: AngularFirestore) { }

  getCurrentQuestion(): Observable<Question> {
    return this.db.collection('quiz').valueChanges();
   //   .    return  Observable.of( questionJson.questions[0]);
  }

}
