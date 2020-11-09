import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnoRoutingModule } from './alumno-routing.module';
import { AlumnoComponent } from './alumno.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CourseComponent } from './course/course.component';
import { MyCertificatesComponent } from './my-certificates/my-certificates.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SharedModule } from '../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MyExamComponent } from './my-exam/my-exam.component';
import { CountdownModule } from 'ngx-countdown';
import { ResultComponent } from './result/result.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [AlumnoComponent, MyCoursesComponent, CourseComponent, MyCertificatesComponent, MyProfileComponent, MyExamComponent, ResultComponent],
  imports: [
    CommonModule,
    AlumnoRoutingModule,
    SharedModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CountdownModule,
    NgbModule ,
    MatExpansionModule,
    MatCardModule,
    MatIconModule
  ],
  exports : [
  ]
})
export class AlumnoModule { }
