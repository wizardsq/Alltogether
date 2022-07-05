import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {EmpleadorServiceService} from '../../services/empleador-service.service';
import {Empleador} from '../../models/empleador';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-formulario-emp',
  templateUrl: './formulario-emp.component.html',
  styleUrls: ['./formulario-emp.component.css']
})

export class FormularioEmpComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Atención a clientes', 'Salud', 'Logística', 'Servicios generales', 'Tecnologías de la Información', 'Ventas', 'Educación'];

  matcher = new MyErrorStateMatcher();
  hide = true;

  empleadoForm: FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);


  constructor( private Empleadorservice: EmpleadorServiceService, private fb: FormBuilder) {
    this.empleadoForm = this.fb.group({
      NombreEmpresa: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
      telefonomovil: [''],
      sitioweb: [''],
      ubicacion: ['', Validators.required],
      contrasena: ['', Validators.required],
      categoria: ['', Validators.required],
      titulo: ['', Validators.required],
      descripcion: ['', Validators.required],
      informacion: ['', Validators.required],
      sueldo: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  agregarEmpleador(){
    const empleado: Empleador = {
      NombreEmpresa: this.empleadoForm.get('NombreEmpresa')?.value,
      correo: this.empleadoForm.get('correo')?.value,
      telefono: this.empleadoForm.get('telefono')?.value,
      telefonomovil: this.empleadoForm.get('telefonomovil')?.value,
      sitioweb: this.empleadoForm.get('sitioweb')?.value,
      ubicacion: this.empleadoForm.get('ubicacion')?.value,
      contrasena: this.empleadoForm.get('contrasena')?.value,
      categoria: this.empleadoForm.get('categoria')?.value,
      titulo: this.empleadoForm.get('titulo')?.value,
      descripcion: this.empleadoForm.get('descripcion')?.value,
      informacion: this.empleadoForm.get('informacion')?.value,
      sueldo: this.empleadoForm.get('sueldo')?.value
    };

    this.Empleadorservice.guardarEmpleado(empleado).subscribe(dato => {

      console.log('Empleado Guardado', empleado);
    }, error => {
      console.log(error);
      this.empleadoForm.reset();
    });
  }

}
