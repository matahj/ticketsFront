import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AdminListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule
  ],
  exports: [
    AdminListComponent
  ]
})
export class AdminModule { }
