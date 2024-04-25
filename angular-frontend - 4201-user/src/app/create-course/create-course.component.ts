import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../course.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShareService } from '../share.service';
import { CourseListService } from '../course-list.service';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit {

  course: Course;
  quizs: Quiz[];
  
  constructor(private courseService: CourseService,
    private router: Router, private route: ActivatedRoute, public courselistService:CourseListService) { }
  
  ngOnInit(): void {
    this.course = this.courselistService.course;
    this.quizs = this.course.quizs;
  }

  savecourse(){
    this.courseService.createCourse(this.course).subscribe( data =>{
      console.log(data);
      this.course.id = data;
      this.goTocourseList();
    },
    error => console.log(error));
  }

  goTocourseList(){
    this.router.navigate(['/courses']);
  }

  addQuiz(){
    let id = this.course.quizs.length - 1;
    this.courselistService.quiz = this.course.quizs[id]
    this.router.navigate(['/create-quiz']);
  }

  updateQuiz(id: number){
    this.courselistService.quiz = this.course.quizs[id]
    this.router.navigate(['/create-quiz']);
  }
  
  onSubmit(){
    console.log(this.course);
    let id = this.courselistService.courses.length - 1;
    if(this.courselistService.courses[id].title != null)
    this.courselistService.courses.push(new Course());
    this.savecourse();
  }

}
