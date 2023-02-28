import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import {FooterModule} from "@coreui/angular";
import { Footer01Component } from './components/footer01/footer01.component';
import { Header01Component } from './components/header01/header01.component';

@NgModule({
  declarations: [
    Footer01Component,
    Header01Component
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FooterModule
  ],
  exports: [
    Header01Component,
    Footer01Component
  ]
})
export class SharedModule { }
