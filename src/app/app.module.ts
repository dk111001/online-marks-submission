import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'ng-sidebar';
import { MatTableModule } from '@angular/material/table';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { FacultyHomeComponent } from './faculty-home/faculty-home.component';
import { HodHomeComponent } from './hod-home/hod-home.component';
import { ControllerHomeComponent } from './controller-home/controller-home.component';
import { HeaderFacultyComponent } from './header-faculty/header-faculty.component';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule,} from '@angular/fire/firestore'
import { AngularFireDatabaseModule } from '@angular/fire/database';


import { FacultyCourseComponent } from './faculty-course/faculty-course.component';
import { HodCourseComponent } from './hod-course/hod-course.component';


import { FacultyService } from './services/faculty.service';
import { ProcessHTTPMsgService } from './services/process-httpmsg.service';
import { FacultyCourseService } from './services/faculty-course.service';
import { HodDepartmentComponent } from './hod-department/hod-department.component';
import { ControllerDepartmentComponent } from './controller-department/controller-department.component';
import { ControllerCourseComponent } from './controller-course/controller-course.component'
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    HeaderLoginComponent,
    FacultyHomeComponent,
    HodHomeComponent,
    ControllerHomeComponent,
    HeaderFacultyComponent,
    FacultyCourseComponent,
    HodCourseComponent,
    HodDepartmentComponent,
    ControllerDepartmentComponent,
    ControllerCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatSliderModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule
    
  ],
  providers: [
    FacultyService,
    ProcessHTTPMsgService,
    FacultyCourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
