import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-student-update',
  standalone: true,
  imports: [CommonModule,FormsModule,MatDialogModule,FormsModule, MatFormFieldModule],
  templateUrl: './student-update.component.html',
  styleUrl: './student-update.component.css'
})
export class StudentUpdateComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: Student) { }



  // @Input()
  // updatedStudent = new Student(0,'',0,0,[])

  //  //To send data from child to parent we need to use @Output decorator
  //  @Output()
  //  studentEmitter = new EventEmitter<Student>()//1st step
  //  performUpdate(){
  //      this.studentEmitter.emit(this.updatedStudent)//2nd step
  //      console.log(this.updatedStudent)
  //      console.log(this.data);
  //  }


    performUpdate(){
      
    }


  

  

}

