import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TripListComponent} from "./dashboard/trip/components/trip-list/trip-list.component";
import {TicketListComponent} from "./dashboard/ticket/components/ticket-list/ticket-list.component";

const routes: Routes = [
  {path: "trips", component: TripListComponent},
  {path: "tickets", component: TicketListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
