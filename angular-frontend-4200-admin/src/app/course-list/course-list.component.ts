import { Component, OnInit } from '@angular/core';
import {CourseService} from '../course.service';
import {CourseListService} from '../course-list.service';
import { Router } from '@angular/router';
import { Course } from '../course';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {

  courses : Course[] = null;
  constructor(private courseService: CourseService,
    private router: Router, private courseList : CourseListService) { }
  
  ngOnInit(): void {
    if(this.courseList.courses.length == 1)
      this.courseService.getCoursesList().subscribe(data => {
        this.courseList.courses = data;
        this.courses =this.courseList.courses;
      });
      else
      this.courses = this.courseList.courses;
      console.log(this.courses);
  }


  updateCourse(index: number){
    console.log(index);
    this.courseList.course = this.courses[index];
    this.router.navigate(['create-course']);
  }

  deleteCourse(id: number, index:number){
    this.courseService.deleteCourse(id).subscribe( data => {
      console.log(data);
      this.courseList.courses.splice(index, 1);
      // this.getcourses();
    })
  }

  viewCourse(id: number){
    this.courseList.course = this.courseList.courses[id];
    this.router.navigate(['course-view']);
  }

  // send(){
  //   this.courseService.send(this.courseList.courses).subscribe( data =>{
  //     console.log(data);
      
  //   },
  //   error => console.log(error));
  // }
  searchText: string = ''; 

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }


}
