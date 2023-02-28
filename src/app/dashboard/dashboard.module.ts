import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {TripModule} from "./trip/trip.module";
import {HttpClientModule} from "@angular/common/http";
import {UserModule} from "./user/user.module";
import {AdminModule} from "./admin/admin.module";
import {BusModule} from "./bus/bus.module";
import {DriverModule} from "./driver/driver.module";
import {StationModule} from "./station/station.module";
import {TicketModule} from "./ticket/ticket.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule
  ],
  exports: [
    AdminModule,
    BusModule,
    DriverModule,
    StationModule,
    TicketModule,
    TripModule,
    UserModule
  ]
})
export class DashboardModule { }
