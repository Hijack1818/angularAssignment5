import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';

import { MatRadioModule } from '@angular/material/radio'
import { StudentsComponent } from '../students/students.component';
@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule,MatRadioModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {
  //  students:Student[]=[]
  //  percentages:any=[];
   constructor(private student:StudentsComponent)
   {
  
   }
  
   sortByPercentage()
    {
      this.student.students.sort((a, b) => a.percentage.toString().localeCompare(b.percentage.toString()));
    }
  sortByAttempts()
  {
    console.log(this.student.students)
    this.student.students.sort((a, b) => a.numberOfAttempts.toString().localeCompare(b.numberOfAttempts.toString()));
    console.log(this.student.students)
  }
  sortBysubjects()
  {
    this.student.students.sort((a, b) => a.subjectsLearning.length.toString().localeCompare(b.subjectsLearning.length.toString()));
 
  }
  
}