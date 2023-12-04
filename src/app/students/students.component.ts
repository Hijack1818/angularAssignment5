import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';
import { StudentUpdateComponent } from '../student-update/student-update.component';
import { MatButtonModule } from '@angular/material/button'
import { SortComponent } from '../sort/sort.component';
import { StudentRestService } from '../service/student-rest.service';
import { UserRestService } from '../service/user-rest.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [CommonModule,StudentUpdateComponent,MatButtonModule,SortComponent,MatTableModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {


    students:Student[] = []
    displayedColumns: string[] = ['rollno', 'name', 'numberOfAttempts', 'percentage', 'subjectsLearning', 'action'];
    message:string=""
    colorClass:string=""
    updateClicked:boolean = false
    selectedStudent!:Student
    constructor(private service:StudentRestService,private userService:UserRestService){//private service is dependency injection.service is variable we can keep anything
      // service.findAllStudents().subscribe(
      //   response=>this.students=response
      this.showStudents();
      
    }

    roleOfTheUser(): boolean {
      return this.userService.checkAdmin();
    }

  showStudents(){
    this.service.findAllStudents().subscribe(
      response=>this.students=response
    )
  }
  deleteStudent(rollno:number){
    
    const result = confirm('Want to delete student with roll no: '+rollno)
    if(result){
      this.service.deleteByRollNo(rollno).subscribe(
      success=>{
        this.students=this.students.filter(s => s.rollno != rollno)
        this.message="Record Deleted!!"
        this.colorClass="success"
    })
    }   
    else{
       this.message="Deletion Cancelled!!"
       this.colorClass="error"
    }
  }

  updateStudent(s:Student){
    this.selectedStudent=s
    this.updateClicked = true
  }
  doUpdate(updateStudent:Student){

    this.service.updateStudent(updateStudent).subscribe(
      success=>{
        this.showStudents()
        this.message="Record Updated!!"
        this.colorClass="success"
        this.updateClicked=false
    })

    //map is a built in function of javascript that transforms every element of array.
    //  let modifiedStudents = this.students.map(s=>{ 
    //    if(s.rollno==updateStudent.rollno){
    //     //following line makes use of spread operator.
    //     //Spread operator was added in ES6.
    //     //Using following line we are changing the value of number of attempts field.
    //       return {...s,numberOfAttempts:updateStudent.numberOfAttempts}
    //    }
    //    else{
    //       return s
    //    }
    //  })
     
    //  this.students=modifiedStudents
    //  this.updateClicked=false
  }
  // sortByPercentage()
  // {
  //   this.students.sort((a, b) => a.percentage.toString().localeCompare(b.percentage.toString()));
  // }
  // sortByAttempts()
  // {
  //   this.students.sort((a, b) => a.numberOfAttempts.toString().localeCompare(b.numberOfAttempts.toString()));
  // }
  // sortBysubjects()
  // {
  //   this.students.sort((a, b) => a.subjectsLearning.length.toString().localeCompare(b.subjectsLearning.length.toString()));
 
  // }
  
}
