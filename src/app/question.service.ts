import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Question } from './models/question.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpService: HttpClient) { }

  public getQuestion(id: number): Observable<Question> {
    return this.httpService.get<Question>('./assets/unitedTest.json').pipe(
      map(data => new Question().deserialize(data)),
      catchError(() => throwError('Quiz question not found'))
    );
  }

  public getQuestions(): Observable<Question[]> {
    return this.httpService.get<Question[]>('./assets/unitedTest.json').pipe(
      map(data => data.map(data => new Question().deserialize(data)))
    );
  }
}
