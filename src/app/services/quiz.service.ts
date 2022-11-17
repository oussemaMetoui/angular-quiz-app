import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Scoreboard } from '../pages/ladder/ladder.component';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  currentUsername: string = '';
  numberOfQuestions: number = 0;

  constructor(private router: Router) { }

  calculateScore(correctAns: number, totalQuestions: number): number {
    const score = correctAns * 3 + (totalQuestions - correctAns) * -1
    if (score < 0)
      return 0
    return score
  }

  addUser(username: string, numberOfQuestions: number) {
    this.currentUsername = username;
    this.numberOfQuestions = numberOfQuestions;

  }

  getCurrentUser() {
    return { 'username': this.currentUsername, 'numberOfQuestions': this.numberOfQuestions }
  }

  getScoreUser(username: string): number {
    return Number(localStorage.getItem(username))
  }

  getLadder(): Scoreboard[] {
    let items = { ...localStorage };
    let array = []
    for (let item in items) {
      var obj: any = {};

      obj['username'] = item
      obj['score'] = items[item];
      array.push(obj);
    }
    array.sort
    return array
  }

  endQuiz(correctAnswers: number, totalQuestions: number) {
    const score = this.calculateScore(correctAnswers, totalQuestions)

    const prevScore = localStorage.getItem(this.currentUsername)

    if (!prevScore)
      localStorage.setItem(this.currentUsername, String(score));
    else
      localStorage.setItem(this.currentUsername, String(score + Number(prevScore)));

    this.router.navigate(['/result'])
  }
}

