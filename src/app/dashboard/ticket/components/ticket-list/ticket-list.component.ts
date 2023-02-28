import { Component, OnInit } from '@angular/core';

import { TicketsService } from "../../../../services/tickets.service";

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.css']
})
export class TicketListComponent implements OnInit{
  public ticketsData: any;

  constructor(private ticketsService: TicketsService) {
  }

  ngOnInit(): void {
    this.consulta();
  }

  consulta(): void {
    this.ticketsService.getTickets().subscribe( res=> {
      console.log(res);
      this.ticketsData = res;
    }, (error: any) => {
      console.log(error);
    })
  }

}
