import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserRestService {
  isUserLoggedIn:boolean = false
  message:string=''
  readonly BASE_URL = 'http://localhost:8080/api/user'
  constructor(private http:HttpClient) {
    this.isUserLoggedIn = false;
    this.message = '';
    this.isValidSession()
  }

  PerformLogin(username: string, password: string){
    const user = {
      name: username,
      password: password
    };
    return this.http.post(this.BASE_URL+"/login", user);
  }

  PerformRegistration(username: string, password: string, role: string):Observable<String> {
    const user = {
      name: username,
      password: password,
      role: role
    };
    // console.log(user);
    return this.http.post<String>(this.BASE_URL, user);
  }

  PerformUpdation(username: string, password: string, role: string) {
    const user = {
      name: username,
      password: password,
      role: role
    };
    return this.http.put(this.BASE_URL, user);
  }

  public createSessionAndStoreValue(username:string, isUserLoggedIn:boolean, role:string){
    this.isUserLoggedIn = isUserLoggedIn
    sessionStorage.setItem('isUserLoggedIn',isUserLoggedIn+'');
    sessionStorage.setItem('username',username);
    sessionStorage.setItem('role',role);

  }

  public isValidSession(){
    // console.log(sessionStorage.getItem('isUserLoggedIn'))
    if(sessionStorage.getItem('isUserLoggedIn')=='true' && this.isUserLoggedIn==false){
      this.isUserLoggedIn = true
      // return true
    }
    else{
      this.isUserLoggedIn = false
    }
    // return false
  }

  public checkAdmin():boolean{
    if(sessionStorage.getItem('role')=='admin'){
      return true
    }
    return false
  }

}
