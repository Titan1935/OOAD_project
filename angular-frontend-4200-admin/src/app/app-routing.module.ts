import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListComponent } from './course-list/course-list.component';
import { CreateCourseComponent } from './create-course/create-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { CreateQuizComponent } from './create-quiz/create-quiz.component';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { QuizViewComponent } from './quiz-view/quiz-view.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const routes: Routes = [
  {path: 'login', component: UserLoginComponent},
  {path: 'register', component: RegisterUserComponent},
  {path: 'courses', component: CourseListComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'create-course', component: CreateCourseComponent},
  {path: 'create-quiz', component: CreateQuizComponent},
  {path: 'create-question', component: CreateQuestionComponent},
  {path: 'update-course', component: UpdateCourseComponent}, 
  {path: 'course-view', component: CourseViewComponent},
  {path: 'quiz-view', component: QuizViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                           
  exports: [RouterModule]
})
export class AppRoutingModule { }
