import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Course } from '../shared/course';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface course {
  name: string;
  professor_id: number;
  professor_name: string;
  department_code: string;
  semester: number;
}

@Component({
  selector: 'app-faculty-home',
  templateUrl: './faculty-home.component.html',
  styleUrls: ['./faculty-home.component.scss']
})
export class FacultyHomeComponent implements OnInit {
  _opened: boolean = false;
  courseData : Course[];
  // [
  //   {name:'Web Tech',professor_id:2,professor_name: 'SK',department_code:'IT',semester:5},
  //   {name:'Web Tech',professor_id:2,professor_name: 'SK',department_code:'IT',semester:5},
  //   {name:'Web Tech',professor_id:2,professor_name: 'SK',department_code:'IT',semester:5},
  //   {name:'Web Tech',professor_id:2,professor_name: 'SK',department_code:'IT',semester:5},
  //   {name:'Web Tech',professor_id:2,professor_name: 'SK',department_code:'IT',semester:5},
  //   {name:'Web Tech',professor_id:2,professor_name: 'SK',department_code:'IT',semester:5},
  //   {name:'Web Tech',professor_id:2,professor_name: 'SK',department_code:'IT',semester:5},
  //   {name:'Web Tech',professor_id:2,professor_name: 'SK',department_code:'IT',semester:5}
  // ];

  private courseCollection: AngularFirestoreCollection<Course>;
  items: Observable<Course[]>;
  param;
  constructor(public afs: AngularFirestore,
    private route: ActivatedRoute,) { 
      //console.log(this.param);
      this.route.paramMap.subscribe(params => {
        this.param = params.get('id')
      });
    
  }

  ngOnInit(): void {
    console.log(this.param);
      this.courseCollection = this.afs.collection<Course>('courses',ref =>{return ref.where('professor_id','==',Number(this.param)).orderBy('name')});
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

}
