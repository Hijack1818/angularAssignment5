import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { UserRestService } from '../service/user-rest.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,MatInputModule,MatButtonModule, FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatSelectModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private r:Router,private service:UserRestService){
  }

  username:string=''
  password:string=''
  message:string=''
  role:string=''

  PerformRegistration() {
    console.log(this.username, this.password, this.role)
    if(this.service.PerformRegistration(this.username,this.password,this.role).subscribe()){
      this.message = 'Registration Success'
      // show students view to user
      this.r.navigate(['students']) //this is programmatic navigation
    }
    this.message = 'Registration Failed'
  }
  
}