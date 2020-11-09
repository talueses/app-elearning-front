import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CourseComponent } from './cursos/course/course.component';
import { CoursesComponent } from './cursos/courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { UsuarioComponent } from './users/usuario/usuario.component';
import { UsuariosComponent } from './users/usuarios/usuarios.component';
import { NewUsuarioComponent } from './users/new-usuario/new-usuario.component';
import { EditUsuarioComponent } from './edit-usuario/edit-usuario.component';
import { FilterPipe} from './pipes/filter.pipe';
import { CompaniesListComponent } from './companies/companies-list/companies-list.component';
import { CoursePipe } from './pipes/course.pipe';
import { NewCourseComponent } from './cursos/new-course/new-course.component';
import { ExamsListComponent } from './exams/exams-list/exams-list.component';
import { NewExamComponent } from './exams/new-exam/new-exam.component';
import { NewCompanyComponent } from './companies/new-company/new-company.component';
import { FooterExamComponent } from './exams/footer-exam/footer-exam.component';
import { ResumeCourseComponent } from './reports/resume-course/resume-course.component';
import { ChartsModule } from 'ng2-charts';
import { ModalComponent } from './modal/modal.component';
import { NewEvaluationComponent } from './evaluaciones/new-evaluation/new-evaluation.component';
import { EvaluationsListComponent } from './evaluaciones/evaluations-list/evaluations-list.component';

@NgModule({
  declarations: [
    FooterComponent,
    ProfileComponent,
    CourseComponent,
    CoursesComponent,
    HeaderComponent,
    UsuarioComponent,
    UsuariosComponent,
    NewUsuarioComponent,
    EditUsuarioComponent,
    FilterPipe,
    CompaniesListComponent,
    CoursePipe,
    NewCourseComponent,
    ExamsListComponent,
    NewExamComponent,
    NewCompanyComponent,
    FooterExamComponent,
    ResumeCourseComponent,
    ModalComponent,
    NewEvaluationComponent,
    EvaluationsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    ChartsModule
  ],
  exports : [
    FooterComponent,
    ProfileComponent,
    CourseComponent,
    CoursesComponent,
    HeaderComponent,
    UsuarioComponent,
    UsuariosComponent,
    // FilterPipe
  ]
})
export class SharedModule { }
