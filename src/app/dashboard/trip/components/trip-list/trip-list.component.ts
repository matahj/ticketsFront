import { Component, OnInit } from '@angular/core';
import {TripModel} from "../../../../models/trip.model";

import { TripsService } from "../../../../services/trips.service";
import {LocalStorageService} from "../../../../services/local-storage.service";

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit{

  public trip! : TripModel;
  public tripsData: any;

  userIsLogged= false;
  adminIsLogged= false;

  constructor( private tripsService: TripsService, private localStorageService: LocalStorageService) {
  }

  ngOnInit(): void {

    this.adminIsLogged = this.localStorageService.consultarLogin("adminIsLogged");
    this.userIsLogged = this.localStorageService.consultarLogin("userIsLogged");

    this.consulta();
  }

  consulta(): void {
    this.tripsService.getTrips().subscribe(res =>{
      //console.log(res);
      this.tripsData = res;
    }, (error: any) => {
      console.log(error);
    })

  }
}
