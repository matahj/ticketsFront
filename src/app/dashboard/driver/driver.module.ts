import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverListComponent } from './components/driver-list/driver-list.component';


@NgModule({
  declarations: [
    DriverListComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule
  ],
  exports: [
    DriverListComponent
  ]
})
export class DriverModule { }
