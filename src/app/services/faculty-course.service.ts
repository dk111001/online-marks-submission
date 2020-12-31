import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FacultyCourseService {

  constructor(private afs:AngularFirestore) { }

  getCourses(){
    return this.afs.collection('courses').snapshotChanges();
  }
}
