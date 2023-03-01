import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../../../services/local-storage.service";

@Component({
  selector: 'app-footer01',
  templateUrl: './footer01.component.html',
  styleUrls: ['./footer01.component.css']
})
export class Footer01Component implements OnInit{
  adminIsLogged = false;
  userIsLogged = false;

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.adminIsLogged = this.localStorageService.consultarLogin("adminIsLogged");
    this.userIsLogged = this.localStorageService.consultarLogin("userIsLogged");
  }

  salir(): void{
    this.localStorageService.almacenarLogin("userIsLogged", false);
    this.localStorageService.almacenarLogin("adminIsLogged",false);
    this.adminIsLogged = this.localStorageService.consultarLogin("adminIsLogged");
    this.userIsLogged = this.localStorageService.consultarLogin("userIsLogged");
  }
}
