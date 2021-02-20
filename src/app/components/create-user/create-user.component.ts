import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  private isValidEmail = /\S+@\S+\.\S+/;

  createUser = this.fb.group({
    nombre: ['', Validators.required],
    correo: ['', [Validators.required, Validators.pattern(this.isValidEmail)]]
  });

  constructor(private fb: FormBuilder, private router: Router, private userSerivice: UsersService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  getErrorMessage(field: string): string {
    let mensaje;
    if (this.createUser.get(field).errors.required) {
      mensaje = `Falta colocar el ${field}`;
    } else if (this.createUser.get(field).hasError('pattern')) {
      mensaje = `${field} invalido`;
    }
    return mensaje;
  }

  esValido(field: string): boolean {
    return (
      (this.createUser.get(field).touched ||
        this.createUser.get(field).dirty) &&
      !this.createUser.get(field).valid
    );
  }

  guardar() {
    let datos = [this.createUser.get('nombre').value, this.createUser.get('correo').value];
    this.userSerivice.createUser(datos[0], datos[1]).subscribe(
      result => {
        if (result) {
          this.toastr.success('', 'Usuario regitrado exitosamente');
          this.router.navigate(['home']);
        }
      }
    )
  }

}
