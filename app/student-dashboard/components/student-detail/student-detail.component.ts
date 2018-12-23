import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Student } from '../../models/student.interface';

@Component({
    selector: 'student-detail',
    template: `
        <div *ngIf="editing" >
            <input [value]="detail.name" (input)="onEdit(name.value)" #name>
        </div>
        <ul *ngIf="!editing">
            {{ detail.name }}
        </ul>
        <button (click)="toggleEdit()">
            {{ editing ? "Done" : "Edit" }}
        </button>
        <button (click)="onRemove()">Remove</button>
    `
})
export class StudentDetailComponent implements OnInit, OnChanges{

    editing: boolean = false;

    @Input()
    detail: Student;

    @Output()
    edit: EventEmitter<any> = new EventEmitter();

    @Output()
    remove: EventEmitter<any> = new EventEmitter();

    ngOnInit(){}

    ngOnChanges(changes){
        this.detail = Object.assign({}, changes.detail.currentValue);
        console.log(changes);
    }

    toggleEdit(){
        if(this.editing){
            this.edit.emit(this.detail);
        }
        this.editing = !this.editing;
    }

    onEdit(value: string){
        this.detail.name = value;
    }

    onRemove(){
        this.remove.emit(this.detail);
    }
}