import { Component } from '@angular/core';
import { Question } from '../models/question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
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

  public getResult(quizForm:any) {
  //   var count = 0;
  //   var msg = "";
  //   var option1 = this.question.options[0];
  //   var option2 = this.question.options[1];
  //   var option3 = this.question.options[2];
  //   var option4 = this.question.options[3];
  //   if (this.question.isAnswered == option2.isAnswer) {
  //     count++;
  //   }
  //   else {

  //   }
    
  //   if (count > 6) {
  //     msg = `You passed! You answered ${count}/10 correct!`;
  //   }

  //   else {
  //     msg = `You failed! You answered ${count}/10 correct`
  //   }
  }

}
