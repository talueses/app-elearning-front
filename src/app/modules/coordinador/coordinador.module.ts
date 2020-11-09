import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoordinadorRoutingModule } from './coordinador-routing.module';
import { CoordinadorComponent } from './coordinador.component';
import { SharedModule } from '../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module


@NgModule({
  declarations: [CoordinadorComponent],
  imports: [
    CommonModule,
    CoordinadorRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class CoordinadorModule { }
