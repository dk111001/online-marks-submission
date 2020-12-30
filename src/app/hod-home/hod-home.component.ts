import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

export interface Department{
  name: string;
  professor_id: number;
  professor_name: string;
  department_code: string;
}

@Component({
  selector: 'app-hod-home',
  templateUrl: './hod-home.component.html',
  styleUrls: ['./hod-home.component.scss']
})
export class HodHomeComponent implements OnInit {
  _opened: boolean = false;

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
  semesters = ['1st semester','2nd semester','3rd semester','4th semester','5th semester','6th semester','7th semester','8th semester'];

  constructor(private router:Router,
    private route : ActivatedRoute,) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.router.navigate(['register'], { relativeTo: this.route });
  }

  _toggleSidebar() {
    this._opened = !this._opened;
  }
  _toggleSidebar_close() {
    this._opened = false;
  }

}
