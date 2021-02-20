import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  URL_BACKEND = 'http://localhost:3000/api';


  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get(this.URL_BACKEND + '/users');
  }

  getUsersByID(id: number): Observable<any> {
    return this.http.get(this.URL_BACKEND + '/users/' + id);
  }


  createUser(name: string, email: string): Observable<any> {
    let datos = [name, email]
    return this.http.post(this.URL_BACKEND + '/users/', datos);
  }


  deleteUser(id: number): Observable<any> {
    return this.http.delete(this.URL_BACKEND + '/users/' + id);
  }

  updateUser(id: any, name: string, email: string): Observable<any> {
    let datos = [name, email];
    return this.http.put(this.URL_BACKEND + '/users/' + id, datos);
  }

}
