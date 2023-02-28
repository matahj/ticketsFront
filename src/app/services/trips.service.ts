import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TripsService {

  constructor(private httpClient: HttpClient) { }
  url = "https://ticketssprbootv2-production.up.railway.app/trips";

  getTrips(){
    return this.httpClient.get(this.url);
  }
}
