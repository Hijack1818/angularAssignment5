import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './auth.guard';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';

export const routes: Routes = [
    {path:'students',component:StudentsComponent,canActivate:[authGuard]},
    {path:'login',component:LoginComponent},
    {path:'about-us',component:AboutUsComponent},
    {path:'register',component:RegisterComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'logout',component:LogoutComponent},
    {path: 'profile-update', component:ProfileUpdateComponent},
];
