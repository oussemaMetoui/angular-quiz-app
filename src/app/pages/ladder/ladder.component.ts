import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';

export interface Scoreboard {
  position: number;
  username: string;
  score: number;
}

@Component({
  selector: 'app-ladder',
  templateUrl: './ladder.component.html',
  styleUrls: ['./ladder.component.css']
})

export class LadderComponent implements OnInit {
  displayedColumns: string[] = ['position', 'username', 'score'];
  ladder: Scoreboard[] = [];
  constructor(private quizService: QuizService) { }

  ngOnInit() {
    this.ladder = this.quizService.getLadder();
    console.log(this.ladder);


  }

}
