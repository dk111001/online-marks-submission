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

@Component({
  selector: 'app-controller-course',
  templateUrl: './controller-course.component.html',
  styleUrls: ['./controller-course.component.scss']
})
export class ControllerCourseComponent implements OnInit {

  private marksCollection: AngularFirestoreCollection<Marks>;
  items: Observable<Marks[]>;
  dataSource:Marks[];
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
