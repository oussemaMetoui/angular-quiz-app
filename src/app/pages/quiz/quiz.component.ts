import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  questionIndex: number = 0;
  questionNumber: number = 1;
  questions: any;
  numberOfQuestions: number = 0;
  currentUsername: string = '';
  correctAnswers: number = 0;

  constructor(private questionService: QuestionsService, private quizService: QuizService) { }

  ngOnInit(): void {
    const { username, numberOfQuestions } = this.quizService.getCurrentUser()
    console.log("quiz username", username);

    // TODO: check empty username

    this.numberOfQuestions = numberOfQuestions;
    this.currentUsername = username;

    this.questionService.getQuizzes(numberOfQuestions)
      .subscribe(response => {
        this.questions = response;
      });

  }

  checkAnswer(selectedOption: string, correctAns: string) {
    if (selectedOption === correctAns)
      this.nextQuestion(true)
    else this.nextQuestion(false)
  }

  nextQuestion(isCorrect: boolean) {
    if (isCorrect) this.correctAnswers++

    if (this.questionIndex < this.numberOfQuestions && (this.numberOfQuestions - 1) != this.questionIndex) {
      this.questionIndex++;
      this.questionNumber++;
    } else {
      this.quizService.endQuiz(this.correctAnswers, this.numberOfQuestions)

    }
  }

  getQuestionOptions(question: any): any[] {
    return [...question.incorrectAnswers, question.correctAnswer]
  }
}
