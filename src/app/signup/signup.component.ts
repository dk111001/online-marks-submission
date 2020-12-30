import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  registerForm : FormGroup;
  @ViewChild('fform') registerFormDirective;
  constructor(private router:Router,
    private fb: FormBuilder) {
      this.createForm();

    }

  ngOnInit(): void {
    console.log(this.router.url);
  }
  createForm(){
    this.registerForm = this.fb.group({
      institute_id: '',
      username: '',
      password: '',
      confirm_password: ''
    });
  }
  
  onSubmit(){
    console.log(this.registerForm.value);
    this.registerFormDirective.resetForm({
      username: '',
      password: '',
      type: ''
    });
  }

}
