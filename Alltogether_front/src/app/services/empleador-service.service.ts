import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Empleador} from '../models/empleador';
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmpleadorServiceService {

  urlLoginEmp = environment.baseUrl + 'home/empleador/loginEmp';
  urlRegisterEmp = environment.baseUrl + 'home/empleador/registerEmp';
  urlLogoutEmp = environment.baseUrl + 'home/empleador/logout';
  url = environment.baseUrl + 'home/empleador';
  constructor( private http: HttpClient, private router: Router) { }

  getEmpleador(): Observable<any> {
    return this.http.get(this.url);
  }
  guardarEmpleado(empleador: Empleador): Observable<any> {
    return this.http.post(this.urlRegisterEmp, empleador);
  }

  loginEmp(empleador: Empleador): Observable<any> {
    // @ts-ignore
    return this.http.post(this.urlLoginEmp, empleador);
  }
  Logout(): Observable<any>{
    return this.http.get(this.urlLogoutEmp);
  }
  // tslint:disable-next-line:typedef
  isLoggedIn() {
    return !!window.sessionStorage.getItem('empleador');
  }


}
