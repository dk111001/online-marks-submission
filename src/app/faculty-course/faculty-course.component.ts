import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface tableForm {
  enroll_id : number;
  name: string;
  internal: number;
  final: number;
}

const ELEMENT_DATA: tableForm[] = [
  {enroll_id: 1, name: 'Deepak', internal: 30, final: 50},
  {enroll_id: 1, name: 'Deepak', internal: 30, final: 50},
  {enroll_id: 1, name: 'Deepak', internal: 30, final: 50},
  {enroll_id: 1, name: 'Deepak', internal: 30, final: 50},
  {enroll_id: 1, name: 'Deepak', internal: 30, final: 50},
  {enroll_id: 1, name: 'Deepak', internal: 30, final: 50},
  
];


@Component({
  selector: 'app-faculty-course',
  templateUrl: './faculty-course.component.html',
  styleUrls: ['./faculty-course.component.scss']
})
export class FacultyCourseComponent implements OnInit {


  table : tableForm;
  tableForm : FormGroup;
  editRowId :number = -1;
  editColId : number = -1;
  @ViewChild('fform') tableFormDirective;
  
  
  dataSource = ELEMENT_DATA;


  _opened : boolean = false;
  
  constructor(
    private router:Router,
    private route : ActivatedRoute,
    private fb: FormBuilder) {
      this.createForm();

    }
  createForm(){
    this.tableForm = this.fb.group({
      enroll_id: [''],
      name: ['' ],
      internal: ['' ],
      final : ['']
    });
  }
  ngOnInit(): void {
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }
  _toggleSidebar_close() {
    this._opened = false;
  }
  onSubmit(){
    this.table = this.tableForm.value;
    console.log(this.table);
    this.dataSource.push(this.table);
    this.tableFormDirective.resetForm({
      enroll_id: '',
      name: '',
      internal: '',
      final: ''
    });
  }

  edit(x:number,y:number){
    this.editRowId = x;
    this.editColId = y;
  }

  save(){

  }
  submit(){
    
  }
}
