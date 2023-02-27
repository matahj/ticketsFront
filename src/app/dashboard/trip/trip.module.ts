import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TripRoutingModule } from './trip-routing.module';
import { TripListComponent } from './components/trip-list/trip-list.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    TripListComponent
  ],
  imports: [
    CommonModule,
    TripRoutingModule,
    HttpClientModule
  ],
  exports: [
    TripListComponent
  ]
})
export class TripModule { }
