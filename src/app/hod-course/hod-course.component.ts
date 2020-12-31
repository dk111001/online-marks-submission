import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { FacultyCourseService } from '../services/faculty-course.service'
import { Course } from '../shared/course';
import { Marks } from '../shared/marks';

import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


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
  selector: 'app-hod-course',
  templateUrl: './hod-course.component.html',
  styleUrls: ['./hod-course.component.scss']
})
export class HodCourseComponent implements OnInit {
  dataSource:Marks[];
  private marksCollection: AngularFirestoreCollection<Marks>;
  items: Observable<Marks[]>;

  param;
  constructor(
    public afs: AngularFirestore,
    private router:Router,
    private route : ActivatedRoute,
    private fb: FormBuilder,
    private courseService : FacultyCourseService)
     {
      
      this.route.paramMap.subscribe(params => {
        this.param = params.get('id')
      });

    }

  ngOnInit(): void {
    console.log(this.param);
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
          console.log(items);
        });
  }

}
