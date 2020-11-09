import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JwtInterceptor} from './helpers/jwt.interceptor';
import {  ErrorInterceptor } from './helpers/error.interceptor';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {NgxPaginationModule} from 'ngx-pagination'; 
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { PdfMakeWrapper } from 'pdfmake-wrapper';
import pdfFonts from "pdfmake/build/vfs_fonts";
// import { CoursesComponent } from './modules/shared/courses/courses.component';
import { PwChangeComponent } from './pages/pw-change/pw-change.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { FilterPipe } from './modules/shared/pipes/filter.pipe';
import { ChartsModule } from 'ng2-charts';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

PdfMakeWrapper.setFonts(pdfFonts);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    ForgotPasswordComponent,
    PwChangeComponent,
    LoginAdminComponent,
    ResetPasswordComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule,
    ChartsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
