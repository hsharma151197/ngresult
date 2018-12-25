import { Component, OnInit } from '@angular/core';
import { Student } from '../../models/student.interface';
import { StudentDashboardService } from '../../student-dashboard.service';

@Component({
    selector: 'student-dashboard',
    styleUrls: ['student-dashboard.component.scss'],
    template: `
        <h1>Himanshu</h1>
        <student-count
         [items]="students">
        </student-count>
        <div>Student Detail</div>
        <div *ngFor="let student of students" [textContent]="student.name"></div>
        <student-detail
         *ngFor="let student of students"
         [detail]="student"
         (edit)="handleEdit($event)"
         (remove)="handleRemove($event)"
         >
        </student-detail>
    `
})
export class StudentDashboardComponent implements OnInit{
    students: Student[];
    constructor(private studentService: StudentDashboardService){}
    ngOnInit(){
        this.studentService.getStudents().subscribe((data: Student[])=>{
            this.students = data;
        });
    }
    handleEdit(event: Student){
        this.studentService.updateStudents(event).subscribe((data: Student)=>{
            this.students = this.students.map((student: Student) => {
                if(student.id === event.id){
                    student = Object.assign({}, student, event);
                }
                return student;
            });
        })
    }
    handleRemove(event: Student){
        this.studentService.deleteStudents(event).subscribe((data: Student)=>{
            this.students = this.students.filter((student: Student) => student.id !== event.id);
        })
    }
}