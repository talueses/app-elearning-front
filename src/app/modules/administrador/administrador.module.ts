import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministradorRoutingModule } from './administrador-routing.module';
import { AdministradorComponent } from './administrador.component';
import { SharedModule } from '../shared/shared.module';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [AdministradorComponent],
  imports: [
    CommonModule,
    AdministradorRoutingModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class AdministradorModule { }
