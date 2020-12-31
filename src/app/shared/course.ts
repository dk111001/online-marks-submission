import {Marks} from './marks'
export interface Course{
    id?: string,
    code:string,
    name: string,
    professor_id: number,
    professor_name: string,
    department_id:string,
    semester: number,
    review_hod: boolean;
    review_controller : boolean;
    submitted:boolean;
    marks : Marks[]
  }