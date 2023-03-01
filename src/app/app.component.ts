import { Component, OnInit, AfterViewChecked } from '@angular/core';
import {LocalStorageService} from "./services/local-storage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked{
  title = 'ticketsFront';

  userIsLogged= false;
  adminIsLogged= false;

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
      //
      this.localStorageService.almacenarLogin("adminIsLogged",true);
      this.adminIsLogged = this.localStorageService.consultarLogin("adminIsLogged");
      this.localStorageService.almacenarLogin("userIsLogged", false);
      this.userIsLogged = this.localStorageService.consultarLogin("userIsLogged");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked, app.component");
  }




}
