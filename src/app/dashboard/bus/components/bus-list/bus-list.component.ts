import { Component, OnInit } from '@angular/core';

import { BusesService } from "../../../../services/buses.service";

@Component({
  selector: 'app-bus-list',
  templateUrl: './bus-list.component.html',
  styleUrls: ['./bus-list.component.css']
})
export class BusListComponent implements OnInit{
  public busesData: any;

  constructor(private busesService: BusesService) {
  }

  ngOnInit(): void {
    this.consulta();
  }

  consulta(): void {
    this.busesService.getBuses().subscribe( res => {
      //console.log(res);
      this.busesData = res;
    }, (error: any) => {
      console.log(error);
    })
  }

}
