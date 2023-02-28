import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TripListComponent} from "./dashboard/trip/components/trip-list/trip-list.component";
import {TicketListComponent} from "./dashboard/ticket/components/ticket-list/ticket-list.component";
import {AdminListComponent} from "./dashboard/admin/components/admin-list/admin-list.component";
import {BusListComponent} from "./dashboard/bus/components/bus-list/bus-list.component";
import {DriverListComponent} from "./dashboard/driver/components/driver-list/driver-list.component";
import {StationListComponent} from "./dashboard/station/components/station-list/station-list.component";
import {UserListComponent} from "./dashboard/user/components/user-list/user-list.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {path: "admins", component: AdminListComponent},
  {path: "buses", component: BusListComponent},
  {path: "drivers", component: DriverListComponent},
  {path: "stations", component: StationListComponent},
  {path: "tickets", component: TicketListComponent, canActivate: [AuthGuard]},
  {path: "trips", component: TripListComponent},
  {path: "users", component: UserListComponent},
  {path: "", redirectTo: "/trips", pathMatch: 'full'},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
