import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { StudentDashboardComponent } from './containers/student-dashboard/student-dashboard.component';

import { StudentCountComponent } from './components/student-count/student-count.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';

import { StudentDashboardService } from './student-dashboard.service';

@NgModule({
    imports: [
        CommonModule,
        HttpModule
    ],
    declarations: [
        StudentDashboardComponent,
        StudentCountComponent,
        StudentDetailComponent
    ],
    exports: [
        StudentDashboardComponent
    ],
    providers: [
        StudentDashboardService
    ]
})
export class StudentDashboardModule{}