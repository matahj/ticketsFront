import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverListComponent } from './components/driver-list/driver-list.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    DriverListComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    HttpClientModule
  ],
  exports: [
    DriverListComponent
  ]
})
export class DriverModule { }
