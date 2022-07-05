import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmpleadorServiceService} from '../../services/empleador-service.service';
import {Router} from '@angular/router';
import {Empleador} from '../../models/empleador';

@Component({
  selector: 'app-login-emp',
  templateUrl: './login-emp.component.html',
  styleUrls: ['./login-emp.component.css']
})
export class LoginEmpComponent implements OnInit {
  loginFormEmp: FormGroup;
  constructor(private fb: FormBuilder, private loginemp: EmpleadorServiceService, private route: Router, ) {
    this.loginFormEmp = fb.group({
      correo: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  loginEmp(){
    const empleador: Empleador = {
      correo: this.loginFormEmp.get('correo')?.value,
      contrasena: this.loginFormEmp.get('contrasena')?.value
    };
    this.loginemp.loginEmp(empleador).subscribe(data => {
        console.log(data);
    }, err => {
      console.log(err, 'entro aqui');
    });
  }

}
