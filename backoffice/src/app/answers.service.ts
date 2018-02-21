import { Injectable } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

@Injectable()
export class AnswersService {

  constructor(private db: AngularFirestore) { }

  getAnswers() {
   return this.db.collection('answers').valueChanges().map(values => {
     console.log('answer values', values);
     return values.filter((ans: any) => !!ans.answer);
   });
  }

}
