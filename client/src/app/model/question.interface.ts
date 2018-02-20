import {Answer} from './answer.interface';

export interface Question {
  id: number;
  type: 'textual' | 'image';
  text: string;
  answers: Answer[];
}
