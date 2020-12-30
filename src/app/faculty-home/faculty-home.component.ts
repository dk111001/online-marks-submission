import { Component, OnInit } from '@angular/core';


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
  courseData : course[] = [
    {name:'Web Tech',professor_id:2,professor_name: 'SK',department_code:'IT',semester:5},
    {name:'Web Tech',professor_id:2,professor_name: 'SK',department_code:'IT',semester:5},
    {name:'Web Tech',professor_id:2,professor_name: 'SK',department_code:'IT',semester:5},
    {name:'Web Tech',professor_id:2,professor_name: 'SK',department_code:'IT',semester:5},
    {name:'Web Tech',professor_id:2,professor_name: 'SK',department_code:'IT',semester:5},
    {name:'Web Tech',professor_id:2,professor_name: 'SK',department_code:'IT',semester:5},
    {name:'Web Tech',professor_id:2,professor_name: 'SK',department_code:'IT',semester:5},
    {name:'Web Tech',professor_id:2,professor_name: 'SK',department_code:'IT',semester:5}
  ];
  constructor() { }

  ngOnInit(): void {
  }
  _toggleSidebar() {
    this._opened = !this._opened;
  }
  _toggleSidebar_close() {
    this._opened = false;
  }

}
