import { Component, OnInit } from '@angular/core';
import { TripService } from "../../../../services/trip.service";
import {TripModel} from "../../../../models/trip.model";

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit{

  public trip! : TripModel;
  public tripData: any;

  constructor( private tripService: TripService) {
  }

  ngOnInit(): void {
    this.consulta();
  }

  consulta(): void {

    this.tripService.getTrip().subscribe( res => {
      console.log(res);
      this.tripData = res;
    }, (error: any) => {
      console.log(error);
    } )

  }
}
