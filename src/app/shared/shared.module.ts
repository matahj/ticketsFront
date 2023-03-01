import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {FooterModule} from "@coreui/angular";
import { Footer01Component } from './components/footer01/footer01.component';
import { Header01Component } from './components/header01/header01.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    Footer01Component,
    Header01Component,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FooterModule
  ],
  exports: [
    Header01Component,
    Footer01Component,
    LoginComponent
  ]
})
export class SharedModule { }
