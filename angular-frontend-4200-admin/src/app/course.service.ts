import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Course } from './course';
import {CourseListComponent } from './course-list/course-list.component';
import { Question } from './question';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private userURL = "http://localhost:8080/api/v1";
  private baseURL = "http://localhost:8080/api/v1/courses";

  constructor(private httpClient: HttpClient) { }
  
  loginUser(user:User):Observable<object>{
    console.log(user)
    return this.httpClient.post(`${this.userURL}/${"login"}`,user);
   }

  registerUser(user:User):Observable<Object>{
    console.log(user)
    return this.httpClient.post(`${this.userURL}/${"register"}`,user)
   } 

  getCoursesList(): Observable<Course[]>{
    console.log("Get query for course-list");
    return this.httpClient.get<Course[]>(`${this.baseURL}`);
  }

  createCourse(Course: Course): Observable<number>{
    return this.httpClient.post<number>(`${this.baseURL}`, Course);
  }

  send(Questions: Question[]): Observable<number>{
    console.log("kk");
    return this.httpClient.post<number>(`${this.baseURL}/${"send"}`, Questions);
  }

  getCourseById(id: number): Observable<Course>{
    console.log("Get query /", id);
    return this.httpClient.get<Course>(`${this.baseURL}/${id}`);
  }

  updateCourse(id: number, Course: Course): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, Course);
  }

  deleteCourse(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


}
