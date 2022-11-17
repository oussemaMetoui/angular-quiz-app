import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  username: string = "";
  numberOfQuestions: number = 5;

  constructor(private router: Router, private service: QuizService) { }

  onStartQuiz() {
    this.service.addUser(this.username, this.numberOfQuestions)
    this.router.navigate(['/quiz'],);
  }
}
