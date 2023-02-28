import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminListComponent } from './components/admin-list/admin-list.component';


@NgModule({
  declarations: [
    AdminListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    AdminListComponent
  ]
})
export class AdminModule { }
