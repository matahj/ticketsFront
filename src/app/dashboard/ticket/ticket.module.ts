import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';


@NgModule({
  declarations: [
    TicketListComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule
  ],
  exports: [
    TicketListComponent
  ]
})
export class TicketModule { }
