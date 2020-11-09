import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { DocenteComponent } from './docente.component';
import { SharedModule } from '../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [DocenteComponent],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class DocenteModule { }
