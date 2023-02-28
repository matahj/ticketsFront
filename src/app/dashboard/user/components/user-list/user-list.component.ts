import { Component, OnInit } from '@angular/core';

import { UsersService } from "../../../../services/users.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  public usersData: any;

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.consulta();
  }

  consulta(): void {
    this.usersService.getUsers().subscribe( res => {
      console.log(res);
      this.usersData = res;
    }, (error: any) => {
      console.log(error);
    })
  }
}
