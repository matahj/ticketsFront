import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus-routing.module';
import { BusListComponent } from './components/bus-list/bus-list.component';


@NgModule({
  declarations: [
    BusListComponent
  ],
  imports: [
    CommonModule,
    BusRoutingModule
  ],
  exports: [
    BusListComponent
  ]
})
export class BusModule { }
