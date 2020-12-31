import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Course } from '../shared/course';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
@Component({
  selector: 'app-controller-department',
  templateUrl: './controller-department.component.html',
  styleUrls: ['./controller-department.component.scss']
})
export class ControllerDepartmentComponent implements OnInit {
  _opened: boolean = false;
  currentData : Course[];
  courseData : Course[];
  semesters = ['1st Year','2nd Year','3rd Year','4th Year'];
  choice : number = 0; 
  private courseCollection: AngularFirestoreCollection<Course>;
  items: Observable<Course[]>;
  param;
  constructor(
    private router : Router,
    public afs: AngularFirestore,
    private route: ActivatedRoute,) { 
      //console.log(this.param);
      this.route.paramMap.subscribe(params => {
        this.param = Number(params.get('id'));
      });
    
  }

  ngOnInit(): void {
    this.courseCollection = this.afs.collection<Course>('courses',ref =>{return ref.where('department_id','==',Number(this.param))});
        this.items = this.courseCollection.snapshotChanges().pipe(
          map(actions => actions.map(a => {
            const data = a.payload.doc.data() as Course;
            const id = a.payload.doc.id;
            return { id, ...data };
          }))
        );
        this.items.subscribe(items=>{
          this.courseData = items;
          console.log(items);
        });
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }
  _toggleSidebar_close() {
    this._opened = false;
  }
  choose(x:number){
    console.log('totto');
    this.choice = x;
    this.currentData = [];
    for(let data of this.courseData){
      if(data.semester==this.choice)
      this.currentData.push(data);
    }
  }

}
