import { Component, OnInit } from '@angular/core';
import {TripModel} from "../../../../models/trip.model";

import { TripsService } from "../../../../services/trips.service";

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit{

  public trip! : TripModel;
  public tripsData: any;

  constructor( private tripsService: TripsService) {
  }

  ngOnInit(): void {
    this.consulta();
  }

  consulta(): void {
    this.tripsService.getTrips().subscribe(res =>{
      console.log(res);
      this.tripsData = res;
    }, (error: any) => {
      console.log(error);
    })

  }
}
