import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StationRoutingModule } from './station-routing.module';
import { StationListComponent } from './components/station-list/station-list.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    StationListComponent
  ],
  imports: [
    CommonModule,
    StationRoutingModule,
    HttpClientModule
  ],
  exports: [
    StationListComponent
  ]
})
export class StationModule { }
