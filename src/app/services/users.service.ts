import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }
  url = "https://ticketssprbootv2-production.up.railway.app/users";

  getUsers(){
    return this.httpClient.get(this.url);
  }
}
