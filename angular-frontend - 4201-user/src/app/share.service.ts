import { Injectable } from '@angular/core';
import { Quiz } from './quiz';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  quiz : Quiz = new Quiz();
  question : Question = new Question();
  constructor() { }

  setQuiz(quiz: Quiz){
    this.quiz = quiz;
  }
  getQuiz():Quiz {
    return this.quiz;
  }

  setQuestion(question: Question){
    this.question = question;
  }
  getQuestion():Question {
    return this.question;
  }
}
