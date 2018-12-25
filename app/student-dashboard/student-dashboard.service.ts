import { Http, Response } from '@angular/http';
import { Student } from './models/student.interface';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import "rxjs/add/operator/map";

const STUDENT_API: string = '/api/students';

@Injectable()
export class StudentDashboardService{

    constructor(private http: Http){
        console.log(this.http);
    }

    getStudents(): Observable<Student[]>{
        return this.http.get(STUDENT_API).map((response: Response)=>{
            return response.json();
        })
    }

    getStudent(id:number): Observable<Student>{
        return this.http.get(`${STUDENT_API}/${id}`).map((response: Response)=>{
            return response.json();
        })
    }

    updateStudents(student: Student): Observable<Student>{
        return this.http.put(`${STUDENT_API}/${student.id}`, student).map((response: Response)=>{
            return response.json();
        })
    }

    deleteStudents(student: Student): Observable<Student>{
        return this.http.delete(`${STUDENT_API}/${student.id}`).map((response: Response)=>{
            return response.json();
        })
    }
}