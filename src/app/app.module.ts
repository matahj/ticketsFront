import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {DashboardModule} from "./dashboard/dashboard.module";
import {SharedModule} from "./shared/shared.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
import {AuthGuard} from "./guards/auth.guard";
import {AdminAuthGuard} from "./guards/admin-auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DashboardModule,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard, AdminAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
