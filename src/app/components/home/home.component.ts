import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listUsers: any[];
  cargandoInformacion = false;
  dataSource = null;

  displayedColumns: string[] = ['id', 'name', 'email', 'acciones'];

  /*  applyFilter(event: Event) {
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLowerCase();
   } */

  constructor(private serviceUsers: UsersService) { }

  ngOnInit() {
    this.mostratUsers();
  }

  mostratUsers() {
    this.cargandoInformacion = true;
    this.serviceUsers.getUsers().subscribe(
      result => {
        this.cargandoInformacion = false;
        this.listUsers = result;
        this.dataSource = new MatTableDataSource(this.listUsers);
      }
    );
  }

  deleteUser(id: number) {
    this.serviceUsers.deleteUser(id).subscribe(
      result => {
        this.listUsers = this.listUsers.filter(user => user !== id);
        this.mostratUsers();
      }
    )
  }

}