import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus-routing.module';
import { BusListComponent } from './components/bus-list/bus-list.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    BusListComponent
  ],
  imports: [
    CommonModule,
    BusRoutingModule,
    HttpClientModule
  ],
  exports: [
    BusListComponent
  ]
})
export class BusModule { }
