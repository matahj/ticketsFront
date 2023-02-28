import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    TicketListComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    HttpClientModule
  ],
  exports: [
    TicketListComponent
  ]
})
export class TicketModule { }
