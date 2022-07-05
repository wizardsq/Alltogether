import { Component, OnInit } from '@angular/core';
import {EmpleadorServiceService} from '../../services/empleador-service.service';
import {Empleador} from '../../models/empleador';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-trabajos',
  templateUrl: './trabajos.component.html',
  styleUrls: ['./trabajos.component.css']
})
export class TrabajosComponent implements OnInit {


  constructor( public service: EmpleadorServiceService, private route: ActivatedRoute) {

  }
  empleadores!: Observable<Empleador[]> ;


  ngOnInit(): void {
    this.empleadores = this.service.getEmpleador();
  }
}
