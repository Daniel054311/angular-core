import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { CommonModule } from '@angular/common';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements OnInit {
  @Input(
    {required:true}
  )
  course: Course | undefined;

  @Input({ required:true})
  index : number | undefined;

  @Output()
  courseSelected = new EventEmitter<Course>();



  constructor() { }
  ngOnInit(): void {

  }
  onCourseViewed() {
    console.log("card component clicked");
    this.courseSelected.emit(this.course)
  }
  cardClases(): any {
    if (this.course?.category == 'BEGINNER') {
      return 'beginner';
    }
  }

  cardStyles() { 
    return {'text-decoration':'underline'}
  }

}
