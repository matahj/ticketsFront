import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private httpClient: HttpClient) { }
  url = "https://ticketssprbootv2-production.up.railway.app/drivers";

  getDrivers(){
    return this.httpClient.get(this.url);
  }
}
