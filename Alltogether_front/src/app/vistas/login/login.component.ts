import { Component, OnInit} from '@angular/core';
import {UsuariosServiceService} from '../../services/usuarios-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuarios} from '../../models/usuarios';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder, private login: UsuariosServiceService, private route: Router, ) {
      this.loginForm = fb.group({
      nombreusuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  loginUser(){
    const usuario: Usuarios = {
      nombreusuario: this.loginForm.get('nombreusuario')?.value,
      contrasena: this.loginForm.get('contrasena')?.value
    };
    this.login.loginUser(usuario).subscribe(data =>  {
      // @ts-ignore
      console.log(data);
      window.sessionStorage.setItem('usuario', JSON.stringify(data._id) + JSON.stringify(data.contrasena));
    }, err => {
      console.log(err, 'entro aqui');
    });
  }

}
