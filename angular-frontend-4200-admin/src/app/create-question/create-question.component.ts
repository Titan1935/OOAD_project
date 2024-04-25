import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { ShareService } from '../share.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseListComponent } from '../course-list/course-list.component';
import { CourseListService } from '../course-list.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  question : Question;
  constructor(private share : ShareService,
    private router : Router, private route : ActivatedRoute, private courselistService : CourseListService) { }

  ngOnInit(): void {
    this.question = this.courselistService.question;
  }
  onSubmit(){
    let id = this.courselistService.quiz.questions.length - 1;
    if(this.courselistService.quiz.questions[id].question != null)
    this.courselistService.quiz.questions.push(new Question());
    this.goTocreateQuiz();
  }
  goTocreateQuiz(){
    this.router.navigate(['/create-quiz']);
  }

}
