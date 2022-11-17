import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz-result',
  templateUrl: './quiz-result.component.html',
  styleUrls: ['./quiz-result.component.css']
})
export class QuizResultComponent implements OnInit {
  username: string = '';
  score: number = -1;
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    const { username } = this.quizService.getCurrentUser();
    this.score = this.quizService.getScoreUser(username)

    this.username = username;
  }

}
