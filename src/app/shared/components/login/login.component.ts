import { Component, OnInit } from '@angular/core';
import {LocalStorageService} from "../../../services/local-storage.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  userIsLogged= false;
  adminIsLogged= false;

  constructor(private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {
    this.userIsLogged = this.localStorageService.consultarLogin("userIsLogged");
    this.adminIsLogged = this.localStorageService.consultarLogin("adminIsLogged");
  }

  entrarUsuario(): void {
    //console.log("Login usuario")
    this.localStorageService.almacenarLogin("userIsLogged", true);
    this.localStorageService.almacenarLogin("adminIsLogged", false);
    this.userIsLogged = this.localStorageService.consultarLogin("userIsLogged");
    this.adminIsLogged = this.localStorageService.consultarLogin("adminIsLogged");
  }

  entrarAdmin(): void {
    //console.log("Login admin")
    this.localStorageService.almacenarLogin("userIsLogged", false);
    this.localStorageService.almacenarLogin("adminIsLogged", true);
    this.userIsLogged = this.localStorageService.consultarLogin("userIsLogged");
    this.adminIsLogged = this.localStorageService.consultarLogin("adminIsLogged");
  }

}
