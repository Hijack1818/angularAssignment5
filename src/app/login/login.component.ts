import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { UserRestService } from '../service/user-rest.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   username:string=''
   password:string=''
   message:string=''
   constructor(private service:UserRestService,private r:Router){
      
   }
   PerformLogin(){
    this.service.PerformLogin(this.username,this.password).subscribe((res:any) =>{
      if(res==null){
        this.service.createSessionAndStoreValue('',false,'')
        this.message = 'Login Failed'
        return
      }
      this.message = 'Login Success'
      this.service.createSessionAndStoreValue(this.username,true,res.right)
      // console.log(this.username, this.password)
      // show students view to user   
      this.r.navigate(['students']) //this is programmatic navigation
    })
   }
   
}