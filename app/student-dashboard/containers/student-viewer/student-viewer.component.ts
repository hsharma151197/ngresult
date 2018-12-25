import { Component, ViewRef } from '@angular/core';
import { StudentDashboardService } from '../../student-dashboard.service';
import { Student } from '../../models/student.interface';

@Component({
    selector: 'student-viewer',
    styleUrls: ['student-viewer.component.scss'],
    template: `
        <div>{{ student | json }}</div>
    `
})
export class StudentViewerComponent{
    student: Student;
    constructor(private studentService: StudentDashboardService){}
    ngOnInit(){
        this.studentService.getStudent(2).subscribe((data: Student)=> this.student = data)
    }
}