import { Injectable } from '@angular/core';
import { Faculty } from '../shared/faculty';
// import { DISHES } from '../shared/dishes';  from server

import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { map, catchError } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }
  

  getFacultyById(id: string): Observable<Faculty> {
      return this.http.get<Faculty>(baseURL + 'dishes/' + id)
        .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getFacultyByUsername(username:string) :  Observable<Faculty> {
    return this.http.get<Faculty>(baseURL + 'faculty?username=' + username)
      .pipe(catchError(this.processHTTPMsgService.handleError));
}
  
    
}
