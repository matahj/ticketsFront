import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  almacenarLogin(llave:string, valor:boolean){
    localStorage.setItem(llave, JSON.stringify(valor))
  }

  consultarLogin(llave:string){
    return JSON.parse(localStorage.getItem(llave) || '');
  }

  almacenarString(llave:string, valor:string){
    localStorage.setItem(llave, JSON.stringify(valor))
  }

  consultarString(llave:string){
    return JSON.parse(localStorage.getItem(llave) || '');
  }

  borrar(llave:string){
    localStorage.removeItem(llave);
  }

  limpiarTodo(){
    localStorage.clear();
  }
}
