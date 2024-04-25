import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseListService } from '../course-list.service';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: ['./course-view.component.css']
})
export class CourseViewComponent implements OnInit {

  index: number;
  course: Course;
  constructor(private router:Router, private courselist : CourseListService) { }

  ngOnInit(): void {
    this.course = this.courselist.course;
  }

  onQuizClick(id:number):void{
    this.courselist.quiz = this.course.quizs[id];
    this.router.navigate(['quiz-view']);
  }

}
