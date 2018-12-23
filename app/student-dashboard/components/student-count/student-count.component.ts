import { Component, Input } from '@angular/core';
import { Student } from '../../models/student.interface';

@Component({
    selector: 'student-count',
    template: `
        <div>Student Count</div>
        {{ items.length }}
    `
})
export class StudentCountComponent{
    @Input()
    items: Student;
}