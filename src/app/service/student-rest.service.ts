import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Student } from '../../model/Student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentRestService {
  readonly BASE_URL = 'http://localhost:8080/api/student'

  constructor(private http:HttpClient) { }

  findAllStudents():Observable<Student[]>{
     return this.http.get<Student[]>(this.BASE_URL)
  }

  findByRollNo(rollno:number):Observable<Student>{
    return this.http.get<Student>(this.BASE_URL+rollno)
  }

  saveStudent(s:Student):Observable<Student>{
    return this.http.post<Student>(this.BASE_URL,s)
  }

  deleteByRollNo(rollno:number):Observable<Student>{
    return this.http.delete<Student>(this.BASE_URL+"/"+rollno)
  }

  updateStudent(s:Student):Observable<Student>{
    return this.http.put<Student>(this.BASE_URL,s)
  }

}

