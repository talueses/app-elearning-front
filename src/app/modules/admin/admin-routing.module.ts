import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from '../shared/profile/profile.component';
import { CourseComponent } from './../shared/cursos/course/course.component';
import { CoursesComponent } from './../shared/cursos/courses/courses.component';
import { UsuariosComponent } from '../shared/users/usuarios/usuarios.component';
import { NewUsuarioComponent } from '../shared/users/new-usuario/new-usuario.component';
import { UsuarioComponent } from '../shared/users/usuario/usuario.component';
import { CompaniesListComponent } from '../shared/companies/companies-list/companies-list.component';
import { NewCourseComponent } from '../shared/cursos/new-course/new-course.component';
import { NewCompanyComponent } from '../shared/companies/new-company/new-company.component';
import { ExamsListComponent } from '../shared/exams/exams-list/exams-list.component';
import { NewExamComponent } from '../shared/exams/new-exam/new-exam.component';
import { ResumeCourseComponent } from '../shared/reports/resume-course/resume-course.component';
import { AdminGuard } from '../../helpers/admin.guard';
import { NewEvaluationComponent } from '../shared/evaluaciones/new-evaluation/new-evaluation.component';
import { EvaluationsListComponent } from '../shared/evaluaciones/evaluations-list/evaluations-list.component';


const routes: Routes = [
  {
    path : '',
    component: AdminComponent,
    children : [
      {
        path : '' , redirectTo: 'empresas', pathMatch: 'full'
      },
      {
        path : 'cursos' , component : CoursesComponent
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
        path: 'perfil', component: ProfileComponent
      },
      {
        path: 'usuarios', component: UsuariosComponent
      },
      {
        path: 'usuarios/ver/:id', component: UsuarioComponent
      },
      {
        path: 'usuarios/nuevo', component: NewUsuarioComponent
      },
      {
        path: 'usuarios/edit/:id', component: NewUsuarioComponent
      },
      {
        path: 'empresas', component: CompaniesListComponent
      },
      {
        path: 'empresas/nuevo', component: NewCompanyComponent
      },
      {
        path: 'empresas/edit/:id', component: NewCompanyComponent
      },
      {
        path: 'cursos/nuevo/examenes', component: ExamsListComponent
      },
      {
        path: 'cursos/nuevo/examenes/edit/:typeexam/:id', component: NewExamComponent
      },
      {
        path: 'consultas', component: ResumeCourseComponent
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
export class AdminRoutingModule { }
