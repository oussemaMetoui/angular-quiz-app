export interface User {
    username: string;
    category: string;
    correctAnswer: string;
    incorrectAnswers: string[]
    // constructor(public category: string, public id: string, public correctAnswer: string, public incorrectAnswers: string[]) { }
}