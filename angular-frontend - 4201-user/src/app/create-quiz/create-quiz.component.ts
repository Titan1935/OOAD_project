import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz';
import { ShareService } from '../share.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseListService } from '../course-list.service';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css']
})
export class CreateQuizComponent implements OnInit {

  quiz : Quiz;
  
  constructor(private share : ShareService,
    private router : Router,private route :ActivatedRoute, public courselistService:CourseListService) { }

  ngOnInit(): void {
    this.quiz = this.courselistService.quiz;
  }
  onSubmit(){
    console.log(this.quiz);
    let id = this.courselistService.course.quizs.length - 1;
    if(this.courselistService.course.quizs[id].title != null)
    this.courselistService.course.quizs.push(new Quiz());
    
    this.goTocreateCourse();
  }
  goTocreateCourse(){
    this.router.navigate(['/create-course']);
  }

  addQuestion(){
    let id = this.quiz.questions.length;
    this.courselistService.question = this.quiz.questions[id - 1];
    this.router.navigate(['/create-question']);
  }

  updateQuestion(id:number){
    this.courselistService.question = this.quiz.questions[id];
    this.router.navigate(['/create-question']);
  }
}
