import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User} from '../user';
import { CourseService } from '../course.service';
import { CourseListService } from '../course-list.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css'],
})
export class UserLoginComponent {
  user: User = new User();

  constructor(
    private loginuserservice: CourseService,
    private router: Router,
    private courselist : CourseListService
  ) {}

  ngOnInit(): void {}

  userLogin() {
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(
      (data) => {
        alert('login successful');
        this.courselist.loggedIn = 1;
        this.router.navigate(['/courses']);
      },
      (error) => alert('invalid credentials')
    );
  }
}