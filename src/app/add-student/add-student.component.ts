import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { UserRestService } from '../service/user-rest.service';
import { StudentRestService } from '../service/student-rest.service';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,MatInputModule,MatButtonModule, FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatSelectModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {

  constructor(private r:Router,private service:StudentRestService){
  }

  name:string=''
  rollno:number=0;
  numberOfAttempts:number=0;
  percentage:number=0;
  subjectsLearning:string[]=[];
  message:string=''


  PerformAddStudent() {
    let student = {name:this.name,rollno:this.rollno,numberOfAttempts:this.numberOfAttempts,percentage:this.percentage,subjectsLearning:this.subjectsLearning}
    console.log(student)
    this.service.saveStudent(student).subscribe(data=>{
      console.log(data)
      this.message = 'Add Student Success'
    },error=>{
      console.log(error)
      this.message = 'Add Student Failure'
    })
  }

}
