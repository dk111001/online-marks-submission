import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { ControllerHomeComponent } from './controller-home/controller-home.component';
import { HodHomeComponent } from './hod-home/hod-home.component';
import { FacultyCourseComponent } from './faculty-course/faculty-course.component';

const routes: Routes = [
    { path: 'login',  component: LoginComponent },
    { path: 'register', component:SignupComponent},
    { path : 'faculty',
    children : [
      { path: '', component: FacultyHomeComponent },
      { path: 'course', component: FacultyCourseComponent}
     ]
    },
    { path : 'hod',
      children : [
        { path: '', component: HodHomeComponent },
        { path: 'register', component:SignupComponent}
      ]  
    },  
    { path : 'controller/:id',component: ControllerHomeComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
