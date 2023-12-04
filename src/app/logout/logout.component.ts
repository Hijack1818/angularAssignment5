import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// import { UserService } from '../service/user.service';
import { UserRestService } from '../service/user-rest.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
   constructor(private r:Router,private service:UserRestService){
      this.logout()

   }
   logout(){
      this.service.isUserLoggedIn = false
      this.service.createSessionAndStoreValue('',false,'')
      this.r.navigate(['login'])
   }
}
