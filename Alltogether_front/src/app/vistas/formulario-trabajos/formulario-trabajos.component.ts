import { Component, OnInit } from '@angular/core';
import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-formulario-trabajos',
  templateUrl: './formulario-trabajos.component.html',
  styleUrls: ['./formulario-trabajos.component.css']
})
export class FormularioTrabajosComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['Atención a clientes', 'Salud', 'Logística', 'Servicios generales', 'Tecnologías de la Información', 'Ventas', 'Educación'];

  matcher = new MyErrorStateMatcher();

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  constructor() { }

  ngOnInit(): void {
  }

}
