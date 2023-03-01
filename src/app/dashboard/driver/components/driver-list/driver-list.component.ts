import { Component, OnInit } from '@angular/core';

import { DriversService } from "../../../../services/drivers.service";

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit{
  public driversData: any;

  constructor(private driversService: DriversService) {
  }

  ngOnInit(): void {
    this.consulta();
  }

  consulta(): void {
    this.driversService.getDrivers().subscribe( res => {
      //console.log(res);
      this.driversData = res;
    }, (error: any) => {
      console.log(error);
    })
  }

}
