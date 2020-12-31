import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { ControllerHomeComponent } from './controller-home/controller-home.component';
import { HodHomeComponent } from './hod-home/hod-home.component';
import { FacultyCourseComponent } from './faculty-course/faculty-course.component';
import { HodCourseComponent } from './hod-course/hod-course.component'
import { ControllerDepartmentComponent } from './controller-department/controller-department.component'
import { ControllerCourseComponent } from './controller-course/controller-course.component'

const routes: Routes = [
    { path: 'login',  component: LoginComponent },
    { path: 'register', component:SignupComponent},
    { path : 'faculty/:id',
    children : [
      { path: '', component: FacultyHomeComponent },
      { path: 'course/:id', component: FacultyCourseComponent}
     ]
    },
    { path : 'hod/:id',
      children : [
        { path: '', component: HodHomeComponent },
        { path: 'course/:id', component:HodCourseComponent}
      ]  
    },  
    { path : 'controller/:id',
      children : [
        { path: '', component: ControllerHomeComponent },
        { path: 'department/:id',
          children : [
            {path: '', component:ControllerDepartmentComponent},
            {path: 'course/:id', component:ControllerCourseComponent}
          ]
        }
      ]  
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
