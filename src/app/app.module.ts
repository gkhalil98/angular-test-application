import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { TestComponent } from './test/test.component';
import { QuestionService } from './question.service';
import { Question } from './models/question.model';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule
  ],
  providers: [
    QuestionService,
    Question
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
