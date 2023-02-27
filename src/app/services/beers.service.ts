import { Injectable } from '@angular/core';

//Para interactuar con una api
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  constructor(private httpClient: HttpClient) { }

  //url = 'https://api.sampleapis.com/beers/ale';
  url = 'https://ticketssprbootv2-production.up.railway.app/trips';

  getBeers(){
    return this.httpClient.get(this.url);
  }
}
