import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoordinadorComponent } from './coordinador.component';
import { ProfileComponent } from '../shared/profile/profile.component';
import { CoursesComponent } from '../shared/cursos/courses/courses.component';
import { CourseComponent } from '../shared/cursos/course/course.component';
import { NewCourseComponent } from '../shared/cursos/new-course/new-course.component';
import { ResumeCourseComponent } from '../shared/reports/resume-course/resume-course.component';
import { EvaluationsListComponent } from '../shared/evaluaciones/evaluations-list/evaluations-list.component';
import { NewEvaluationComponent } from '../shared/evaluaciones/new-evaluation/new-evaluation.component';

const routes: Routes = [
  {
    path: '',
    component: CoordinadorComponent,
    children: [
      {
        path: 'perfil', component: ProfileComponent
      },
      {
        path: 'cursos', component: CoursesComponent
      },
      {
        path: 'cursos/nuevo', component: NewCourseComponent
      },
      {
        path: 'cursos/edit/:id', component: NewCourseComponent
      },
      {
        path: 'cursos/ver/:id', component: CourseComponent
      },
      {
        path: 'evaluaciones', component: EvaluationsListComponent
      },
      {
        path: 'evaluaciones/nuevo', component: NewEvaluationComponent
      },
      {
        path: 'evaluaciones/edit/:id', component: NewEvaluationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoordinadorRoutingModule { }
