import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

import { FacultyCourseService } from '../services/faculty-course.service'
import { Course } from '../shared/course';
import { Marks } from '../shared/marks';

import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface tableForm {
  id?:string,
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


  table : Marks;
  tableForm : FormGroup;
  editRowId :number = -1;
  editColId : number = -1;
  @ViewChild('fform') tableFormDirective;
  
  courseData : Course;
  dataSource : Marks[];
  dataSourceTmp : Marks[];

  _opened : boolean = false;

  private marksCollection: AngularFirestoreCollection<Marks>;
  private courseDocument : AngularFirestoreDocument<Course>
  items: Observable<Marks[]>;
  itemCourse : Observable<Course>;

  param;
  constructor(
    public afs: AngularFirestore,
    private router:Router,
    private route : ActivatedRoute,
    private fb: FormBuilder,
    private courseService : FacultyCourseService)
     {
      this.createForm();
      this.route.paramMap.subscribe(params => {
        this.param = params.get('id')
      });

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
    console.log(this.param);
      this.courseDocument = this.afs.doc<Course>('courses/'+this.param);
      this.itemCourse = this.courseDocument.valueChanges();
      this.itemCourse.subscribe(items => {this.courseData = items});
      this.marksCollection = this.afs.collection<Marks>('courses/'+this.param+'/marks',ref =>{return ref.orderBy('enroll_id')});
        this.items = this.marksCollection.snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Marks;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );
        this.items.subscribe(items=>{
          this.dataSource = items;
          this.dataSourceTmp = this.dataSource.slice();
          console.log(items);
        });
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
    this.marksCollection.add(this.table);
    //this.dataSource.push(this.table);
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
    console.log(this.dataSource);
    let keys = Object.keys(this.dataSource[0]);
    console.log(this.dataSource);
    console.log(this.dataSourceTmp);
    for(let i=0; i<this.dataSource.length; i++){
      for(let key of keys){
        
        
      }
      //use i instead of 0
  }
  }
  submit(){
    
  }

  delete(id:string){
    console.log(id);
    this.marksCollection.doc(id).delete();
  }
}
