import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from '../shared/login';

import { Faculty } from '../shared/faculty';
import { FacultyService } from '../services/faculty.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  login : LoginForm;
  loginForm : FormGroup;
  @ViewChild('fform') loginFormDirective;

  faculty : Faculty;
  errMess:string;

  formErrors = {
    'main' : '',
    'username': '',
    'password': '',
    'type' : ''
  };

  validationMessages = {
    'username': {
      'required':      'Username is required.'
    },
    'password': {
      'required':      'Passord is required.'
    }
    ,
    'type': {
      'required':      'Type is required.'
    }
  };

  constructor(private facultyService: FacultyService,
    private router:Router,
    private route : ActivatedRoute,
    private fb: FormBuilder) {
      this.createForm();

    }

  ngOnInit(): void {
    
    console.log(this.router.url);
  }
  createForm(){
    this.loginForm = this.fb.group({
      username: ['', [Validators.required] ],
      password: ['', [Validators.required] ],
      type: ['', [Validators.required] ]
    });
    this.loginForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    if(data){
      //console.log("Dataaa");
      //console.log(data);
    }
    const form = this.loginForm;
    //console.log(form);
    //console.log(this.formErrors);
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  
  onSubmit(){
    //console.log(this.loginForm.value);
    this.login = this.loginForm.value;
    console.log(this.login);
    this.loginFormDirective.resetForm({
      username: this.login.username,
      password: '',
      type: this.login.password
    });
  if(this.login.type == 'professor')
      this.router.navigate(['faculty',this.login.username]);
    else if(this.login.type == 'hod')
      this.router.navigate(['hod',this.login.username]);
    else if(this.login.type=='controller')
      this.router.navigate(['controller',this.login.username]);
    

    else
      this.formErrors['main']+='username or password is incorrect';
    
      
  }

  

}
