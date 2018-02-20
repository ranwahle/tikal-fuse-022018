import {Answer} from './answer.interface';

export interface Question {
  Id: number;
  type: 'textual' | 'image' | string;
  text: string;
  answers: Answer[];
}
