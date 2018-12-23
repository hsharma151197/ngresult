import { Http } from '@angular/http';
import { Student } from './models/student.interface';
import { Injectable } from '@angular/core';

@Injectable()
export class StudentDashboardService{

    constructor(private http: Http){
        console.log(this.http);
    }

    getStudents(): Student[]{
        return [
            {
                id: 1,
                name: 'A',
                age: 15
            },
            {
                id: 2,
                name: 'B',
                age: 16
            },
            {
                id: 3,
                name: 'C',
                age: 14
            },
            {
                id: 4,
                name: 'D',
                age: 15
            },
            {
                id: 5,
                name: 'E',
                age: 13
            }
        ]
    };
}