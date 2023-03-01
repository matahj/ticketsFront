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
import {AdminAuthGuard} from "./guards/admin-auth.guard";
import {LoginComponent} from "./shared/components/login/login.component";

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "admins", component: AdminListComponent, canActivate: [AdminAuthGuard]},
  {path: "buses", component: BusListComponent, canActivate: [AdminAuthGuard]},
  {path: "drivers", component: DriverListComponent, canActivate: [AdminAuthGuard]},
  {path: "stations", component: StationListComponent, canActivate: [AdminAuthGuard]},
  {path: "tickets", component: TicketListComponent, canActivate: [AdminAuthGuard]},
  {path: "trips", component: TripListComponent},
  {path: "users", component: UserListComponent, canActivate: [AdminAuthGuard]},
  {path: "", redirectTo: "/trips", pathMatch: 'full'},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
