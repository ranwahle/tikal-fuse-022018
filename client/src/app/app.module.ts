import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { QuestionComponent } from './question/question.component';
import {FormsModule} from '@angular/forms';
import {QuestionsService} from './questions.service';
import {AuthenticationService} from './authentication.service';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [QuestionsService, AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
