import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private serviceUsers: UsersService) { }

  ngOnInit() {
    /* this.mostratUsers();
    this.mostrarUsuarioPorId(); */
  }

  mostratUsers() {
    this.serviceUsers.getUsers().subscribe(
      result => {
        console.log(result);
      }
    );
  }

  mostrarUsuarioPorId() {
    let id = 4;
    this.serviceUsers.getUsersByID(id).subscribe(
      result => {
        console.log(result)
      }
    );
  }

}