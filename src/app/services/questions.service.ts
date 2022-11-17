import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Quiz } from '../models/Quiz';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http: HttpClient) { }

  getQuizzes(numberOfQuestions: number): Observable<Quiz> {
    return this.http.get<Quiz>(`https://the-trivia-api.com/api/questions?limit=${numberOfQuestions}`)
  }
}