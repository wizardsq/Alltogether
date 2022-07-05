// @ts-ignore
// @ts-ignore
import { Component, OnInit } from '@angular/core';
import {UsuariosServiceService} from '../../services/usuarios-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Usuarios} from '../../models/usuarios';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-formulario-use',
  templateUrl: './formulario-use.component.html',
  styleUrls: ['./formulario-use.component.css']
})
export class FormularioUseComponent implements OnInit {
  hide = true;
  usuarioForm: FormGroup;

  matcher = new MyErrorStateMatcher();


  constructor( private usuarioservice: UsuariosServiceService, private fb: FormBuilder) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      fechaNac: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      telefonomovil: [''],
      contrasena: ['', Validators.required],
      nombreusuario: ['', Validators.required],
      genero: ['', Validators.required],
      informacion: ['', Validators.required],
      dedicas: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  agregarUsuarios(){
    const usuario: Usuarios = {
        nombre: this.usuarioForm.get('nombre')?.value,
        fechaNac: this.usuarioForm.get('fechaNac')?.value,
        correo: this.usuarioForm.get('correo')?.value,
        telefono: this.usuarioForm.get('telefono')?.value,
        telefonomovil: this.usuarioForm.get('telefonomovil')?.value,
        contrasena: this.usuarioForm.get('contrasena')?.value,
        nombreusuario: this.usuarioForm.get('nombreusuario')?.value,
        informacion: this.usuarioForm.get('informacion')?.value,
        genero: this.usuarioForm.get('genero')?.value,
        dedicas: this.usuarioForm.get('dedicas')?.value
    };

    this.usuarioservice.guardarUsuario(usuario).subscribe(dato => {

      console.log('Usuario Guardado', usuario);
    }, error => {
      console.log(error);
      this.usuarioForm.reset();
    });
  }

}
