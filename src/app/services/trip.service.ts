import { Injectable } from '@angular/core';

//Para interactuar con una api
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TripService {
  url = "https://ticketssprbootv2-production.up.railway.app/trips";

  constructor( private httpClient: HttpClient ) {
  }

  getTrip(){
    return this.httpClient.get(this.url);
  }
}
