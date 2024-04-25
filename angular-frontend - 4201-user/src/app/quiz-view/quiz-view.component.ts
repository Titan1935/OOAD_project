import { Component, OnInit } from '@angular/core';
import { CourseListService } from '../course-list.service';
import { CourseService } from '../course.service';
import { Quiz } from '../quiz';
import { Question } from '../question';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-quiz-view',
  templateUrl: './quiz-view.component.html',
  styleUrls: ['./quiz-view.component.css']
})
export class QuizViewComponent implements OnInit {
  quiz: Quiz;
  currQuestion: Question;
  currId :number;
  quizL : number;
  result : number;
  buttons:number[] = [];
  submitf:number = 0;
  constructor(private courselistService:CourseListService,
    private courseService:CourseService) { }
  
  ngOnInit(): void {
    this.currId = 0;
    this.quiz = this.courselistService.quiz;
    this.quizL = this.quiz.questions.length - 1;
    this.buttons.length = this.quizL;
    console.log(this.quiz);
    this.currQuestion = this.quiz.questions[this.currId];
    this.currQuestion.givenAnswer
  }
  previous(id:number):void{
    this.currId--;
    this.currQuestion = this.quiz.questions[id-1];
  }
  next(id:number):void{
    this.currId++;
    this.currQuestion = this.quiz.questions[id+1];
  }
  getQuestion(id:number):void{
    this.currId = id;
    this.currQuestion = this.quiz.questions[id];
  }
  submit():void{
    console.log(this.quiz);
    this.courseService.send(this.quiz.questions).subscribe( data =>{
      console.log(data);
      this.result = data;
      this.submitf = 1;
    },error => console.log(error));
    
    console.log(this.result);
  }
  
}
