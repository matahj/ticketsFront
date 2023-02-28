import { Component, OnInit } from '@angular/core';

import { AdminsService } from "../../../../services/admins.service";

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit{
  public adminsData: any;

  constructor(private adminsService: AdminsService) {
  }

  ngOnInit(): void {
    this.consulta();
  }

  consulta(): void {
    this.adminsService.getAdmins().subscribe( res => {
      console.log(res);
      this.adminsData = res;
    }, (error: any) => {
      console.log(error)
    })
  }

}
