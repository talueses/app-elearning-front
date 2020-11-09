import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminGuard } from './helpers/admin.guard';
import { AdministradorGuard } from './helpers/administrador.guard';
import { CoordinadorGuard } from './helpers/coordinador.guard';
import { DocenteGuard } from './helpers/docente.guard';
import { AlumnoGuard } from './helpers/alumno.guard';
import { PwChangeGuard } from './helpers/pw-change.guard';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { PwChangeComponent } from './pages/pw-change/pw-change.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';


const routes: Routes = [

  {
    path: '', component : LoginComponent,
  },
  {
    path : 'admin', component : LoginAdminComponent,
  },
  {
    path : 'forgot-password', component : ForgotPasswordComponent,
  }
  ,
  {
    path : 'pw-change',
    canActivate: [PwChangeGuard],
    canLoad: [PwChangeGuard],
    component : PwChangeComponent,
  },
  {
    path : 'reset/:token', component : ResetPasswordComponent,
  },
  {
    path : 'alumno',
    canActivate: [AlumnoGuard],
    // canLoad: [AlumnoGuard],
    loadChildren : () => import('./modules/alumno/alumno.module').then(m => m.AlumnoModule)
  },
  {
    path : 'administracion' ,
    canActivate: [AdminGuard],
    // canLoad: [AdminGuard],
    loadChildren : () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path : 'administrador',
    canActivate: [AdministradorGuard],
    // canLoad: [AdministradorGuard],
    loadChildren : () => import('./modules/administrador/administrador.module').then(m => m.AdministradorModule)
  },
  {
    path : 'coordinador',
    canActivate: [CoordinadorGuard],
    // canLoad: [CoordinadorGuard],
    loadChildren : () => import('./modules/coordinador/coordinador.module').then(m => m.CoordinadorModule)
  },
  {
    path : 'docente',
    canActivate: [DocenteGuard],
    // canLoad: [DocenteGuard],
    loadChildren : () => import('./modules/docente/docente.module').then(m => m.DocenteModule)
  },
  {
    path : '**' , component : NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
