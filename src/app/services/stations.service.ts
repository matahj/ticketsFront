import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {StationModel} from "../models/station.model";

@Injectable({
  providedIn: 'root'
})
export class StationsService {
  private station!: StationModel;
  url = "https://ticketssprbootv2-production.up.railway.app/stations";

  constructor(private httpClient: HttpClient) {
    this.station = {city: "Ciudad", address:"Dirección"};
  }

  getStations(){
    return this.httpClient.get(this.url);
  }

  getStation(){
    return this.station;
  }
  setStation(station: StationModel){
    this.station = station;
  }
}
