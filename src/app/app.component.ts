import { Component } from '@angular/core';
import { Question } from './models/question.model';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Manchester United Test';
  public questionId!: number;

  public question!: Question;

  public questions!: Question[];

  constructor (private questionService: QuestionService) { }

  public getQuestion() {
    this.questionService.getQuestion(this.questionId).subscribe(question => this.question = question);
  }

  public getQuestions() {
    this.questionService.getQuestions().subscribe(questions => this.questions = questions);
  }

}