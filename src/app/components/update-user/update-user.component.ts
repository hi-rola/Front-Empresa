import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  private isValidEmail = /\S+@\S+\.\S+/;
  idUser: any;

  formUpdateUser = this.fb.group({
    nombre: ['', Validators.required],
    correo: ['', [Validators.required, Validators.pattern(this.isValidEmail)]]
  });

  constructor(private aRoute: ActivatedRoute, private fb: FormBuilder, private userService: UsersService,
    private router: Router, private toastr: ToastrService) {
    this.idUser = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.userService.getUsersByID(this.idUser).subscribe(
      result => {
        this.formUpdateUser.get('nombre').setValue(result[0].name);
        this.formUpdateUser.get('correo').setValue(result[0].email);
      }
    )
  }


  getErrorMessage(field: string): string {
    let mensaje;
    if (this.formUpdateUser.get(field).errors.required) {
      mensaje = `Falta colocar el ${field}`;
    } else if (this.formUpdateUser.get(field).hasError('pattern')) {
      mensaje = `${field} invalido`;
    }
    return mensaje;
  }

  esValido(field: string): boolean {
    return (
      (this.formUpdateUser.get(field).touched ||
        this.formUpdateUser.get(field).dirty) &&
      !this.formUpdateUser.get(field).valid
    );
  }

  updateUser() {
    let name = this.formUpdateUser.get('nombre').value;
    let email = this.formUpdateUser.get('correo').value;
    this.userService.updateUser(this.idUser, name, email).subscribe(
      result => {
        if(result){
          this.toastr.success('', 'Información actualizada exitosamente');
          this.router.navigate(['/home']);
        }
      }
    );
  }

}
