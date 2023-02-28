import { Component, OnInit } from '@angular/core';

import { StationsService } from "../../../../services/stations.service";

@Component({
  selector: 'app-station-list',
  templateUrl: './station-list.component.html',
  styleUrls: ['./station-list.component.css']
})
export class StationListComponent implements OnInit{
  public stationsData: any;

  constructor(private stationsService: StationsService) {
  }

  ngOnInit(): void {
    this.consulta();
  }

  consulta(): void {
    this.stationsService.getStations().subscribe( res => {
      console.log(res);
      this.stationsData = res;
    }, (error: any) => {
      console.log(error);
    })
  }

}
