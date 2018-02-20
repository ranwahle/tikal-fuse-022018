import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { QuestionComponent } from './question/question.component';
import {FormsModule} from '@angular/forms';
import {QuestionsService} from './questions.service';
import {AuthenticationService} from './authentication.service';
import { HeaderComponent } from './header/header.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import {RouterModule} from '@angular/router';
import {routes} from './app.routing';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {AngularFireModule} from 'angularfire2';
import {config} from './config/firebase.config';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireDatabaseModule} from 'angularfire2/database';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireDatabaseModule
  ],
  declarations: [
    AppComponent,
    QuestionComponent,
    HeaderComponent,
    QuizPageComponent,
    LoginComponent,
    SignupComponent
  ],
  providers: [QuestionsService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
