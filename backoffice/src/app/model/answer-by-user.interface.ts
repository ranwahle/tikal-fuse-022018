import {Question} from './question.interface';
import {Answer} from './answer.interface';

export interface AnswerByUser {
  userName: string;
  question: Question,
  answer: Answer
}
