import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministradorComponent } from './administrador.component';
import { ProfileComponent } from '../shared/profile/profile.component';
import { CourseComponent } from './../shared/cursos/course/course.component';
import { CoursesComponent } from './../shared/cursos/courses/courses.component';
import { UsuariosComponent } from '../shared/users/usuarios/usuarios.component';
import { UsuarioComponent } from '../shared/users/usuario/usuario.component';
import { NewUsuarioComponent} from '../shared/users/new-usuario/new-usuario.component';
import { EditUsuarioComponent} from '../shared/edit-usuario/edit-usuario.component';
import { CompaniesListComponent } from '../shared/companies/companies-list/companies-list.component';
import { NewCourseComponent } from '../shared/cursos/new-course/new-course.component';
import { EvaluationsListComponent } from '../shared/evaluaciones/evaluations-list/evaluations-list.component';
import { NewEvaluationComponent } from '../shared/evaluaciones/new-evaluation/new-evaluation.component';
import { ResumeCourseComponent } from '../shared/reports/resume-course/resume-course.component';

const routes: Routes = [
  {
    path : '',
    component : AdministradorComponent,
    children : [
      {
        path : '' , redirectTo: 'usuarios', pathMatch: 'full'
      },
      {
        path : 'perfil', component: ProfileComponent
      },
      {
        path : 'cursos', component : CoursesComponent
      },
      {
        path : 'cursos/nuevo', component : NewCourseComponent
      },
      {
        path : 'cursos/edit/:id', component : NewCourseComponent
      },
      {
        path : 'cursos/ver/:id', component : CourseComponent
      },
      {
        path : 'usuarios', component : UsuariosComponent
      },
      {
        path : 'usuarios/ver/:id', component : UsuarioComponent
      },
      {
        path : 'usuarios/nuevo', component : NewUsuarioComponent
      },
      {
        path : 'usuarios/edit/:id', component : NewUsuarioComponent
      },
      {
        path : 'evaluaciones', component : EvaluationsListComponent
      },
      {
        path : 'evaluaciones/nuevo', component : NewEvaluationComponent
      },
      {
        path : 'evaluaciones/edit/:id',component : NewEvaluationComponent
      },
      {
        path : 'consultas', component : ResumeCourseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministradorRoutingModule { }
