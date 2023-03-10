import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor( private httpClient: HttpClient) { }
  url = "https://ticketssprbootv2-production.up.railway.app/admins";

  getAdmins(){
    return this.httpClient.get(this.url);
  }
}
