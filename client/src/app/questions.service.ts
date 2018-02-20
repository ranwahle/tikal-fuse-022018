import { Injectable } from '@angular/core';
import {questionJson} from './mocks/questions-mock';
import {Question} from './model/question.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class QuestionsService {

  constructor() { }

  getCurrentQuestion(): Observable<Question> {
    return  Observable.of( questionJson.questions[0]);
  }

}
