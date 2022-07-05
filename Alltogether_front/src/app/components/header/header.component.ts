import { Component, OnInit } from '@angular/core';
import {UsuariosServiceService} from "../../services/usuarios-service.service";

// @ts-ignore
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public service: UsuariosServiceService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef

  logout(){
    this.service.Logout().subscribe(data => {
      console.log('session cerrada');
      window.sessionStorage.removeItem('usuario');
    });
  }

}
