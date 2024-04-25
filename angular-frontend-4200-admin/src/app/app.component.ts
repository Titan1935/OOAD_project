import { Component } from '@angular/core';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListService } from './course-list.service';
import { Course } from './course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EduGuru';
  constructor(public courselistService: CourseListService){

  }
  createCourse():void{
    let id = this.courselistService.courses.length - 1;
    if(id == -1 ||this.courselistService.courses[id].title != null){
      this.courselistService.courses.push(new Course());
      id++;
    }
    this.courselistService.course = this.courselistService.courses[id];
  }
}
