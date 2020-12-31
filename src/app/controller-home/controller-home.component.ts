import { Component, OnInit } from '@angular/core';
export interface Department{
  name: string;
  professor_id: number;
  professor_name: string;
  department_code: string;
}
@Component({
  selector: 'app-controller-home',
  templateUrl: './controller-home.component.html',
  styleUrls: ['./controller-home.component.scss']
})
export class ControllerHomeComponent implements OnInit {


  departments : Department[] = [
    {name : 'Information Technology',professor_id : 8,professor_name : "SD",department_code:"IT"},
    {name : 'Information Technology',professor_id : 8,professor_name : "SD",department_code:"IT"},
    {name : 'Information Technology',professor_id : 8,professor_name : "SD",department_code:"IT"},
    {name : 'Information Technology',professor_id : 8,professor_name : "SD",department_code:"IT"},
    {name : 'Information Technology',professor_id : 8,professor_name : "SD",department_code:"IT"},
    {name : 'Information Technology',professor_id : 8,professor_name : "SD",department_code:"IT"},
    {name : 'Information Technology',professor_id : 8,professor_name : "SD",department_code:"IT"},
    {name : 'Information Technology',professor_id : 8,professor_name : "SD",department_code:"IT"},
    {name : 'Information Technology',professor_id : 8,professor_name : "SD",department_code:"IT"}
    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
