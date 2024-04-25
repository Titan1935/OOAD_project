import { Injectable } from '@angular/core';
import { Course } from './course';
import { Quiz } from './quiz';
import { Question } from './question';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {
  course : Course = null;
  quiz : Quiz = null;
  question : Question = null;
  courses : Course[] = [new Course()];
  loggedIn : number = 1;
  constructor() { }
}
