import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Usuarios} from '../models/usuarios';
import {environment} from '../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosServiceService {
  urlLogin = environment.baseUrl + 'home/usuarios/login';
  urlRegister = environment.baseUrl + 'home/usuarios/register';
  urlLogout = environment.baseUrl + 'home/usuarios/logout';
  urlSendemail = environment.baseUrl + 'home/usuarios/send';
  url = environment.baseUrl + 'home/usuarios';
  constructor( private http: HttpClient, private router: Router) { }

  getUsuarios(): Observable<any> {
    return this.http.get(this.url);
  }
  guardarUsuario(usuario: Usuarios): Observable<any> {
    return this.http.post(this.urlRegister, usuario);
  }

  loginUser(usuario: Usuarios): Observable<any> {
    // @ts-ignore
    return this.http.post(this.urlLogin, usuario);
  }
  Logout(): Observable<any>{
    return this.http.get(this.urlLogout);
  }
  // tslint:disable-next-line:typedef
  isLoggedIn() {
    return !!window.sessionStorage.getItem('usuario');
  }
  sendemail(): Observable<any> {
    // @ts-ignore
    return this.http.post(this.urlSendemail);
  }


}
