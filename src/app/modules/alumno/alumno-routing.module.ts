import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoComponent } from './alumno.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CourseComponent } from './course/course.component';
import { MyCertificatesComponent } from './my-certificates/my-certificates.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyExamComponent } from './my-exam/my-exam.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {
    path : '',
    component : AlumnoComponent,
    children : [
      {
        path : 'myCourses', component : MyCoursesComponent
      },{
        path : 'myCourses/:id' , component : CourseComponent
      },
      {
        path : 'myCourses/:idCourse/exam/:idExam', component : MyExamComponent
      },
      {
        path : 'myCourses/:idCourse/exam/:idExam/resultado', component : ResultComponent
      },
      {
        path: 'myCertificates', component : MyCertificatesComponent
      },
      {
        path: 'myProfile', component : MyProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnoRoutingModule { }
