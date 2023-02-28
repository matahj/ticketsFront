import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StationsService {

  constructor(private httpClient: HttpClient) { }

  url = "https://ticketssprbootv2-production.up.railway.app/stations";
}
