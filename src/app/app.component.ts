import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from "./course-card/course-card.component";
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CourseCardComponent,CommonModule]
})
export class AppComponent {
  courses = [...COURSES];

  startDate = new Date(2000, 0, 1);
  title = COURSES[0]?.description;
  price = 99.90;
  rate = 0.67;

  onCourseSelected(course:Course) {
console.log("App component clicked", course)
  }

  trackCourse(index: number, course: Course) {
    return course.id;
  }

}
