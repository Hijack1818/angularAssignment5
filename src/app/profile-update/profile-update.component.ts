import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { UserRestService } from '../service/user-rest.service';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-profile-update',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule,MatInputModule,MatButtonModule, FormsModule,MatFormFieldModule,MatInputModule,MatButtonModule,MatSelectModule],
  templateUrl: './profile-update.component.html',
  styleUrl: './profile-update.component.css'
})
export class ProfileUpdateComponent {


  constructor(private r:Router,private service:UserRestService){
    this.username=this.service.getUserName();
    this.role=this.service.getRole();
  }

  username:string=''
  password:string=''
  role:string=''

  PerformUpdation() {
    console.log(this.username, this.password, this.role)
    this.service.PerformUpdation(this.username,this.password,this.role).subscribe(res=>{



    })
    // if(this.service.PerformUpdation(this.username,this.password,this.role).subscribe()){
    //   // show students view to user
    //   this.r.navigate(['students']) //this is programmatic navigation
    // }
  }

}
