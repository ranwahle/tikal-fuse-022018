import {Route} from '@angular/router';
import {QuizPageComponent} from './quiz-page/quiz-page.component';
import {SignupComponent} from './signup/signup.component';
import {LoginComponent} from './login/login.component';

export const routes: Route[] = [
  {
    path: 'quiz', component: QuizPageComponent
  },
  {
    path: 'signup', component: SignupComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];
