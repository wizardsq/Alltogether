import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioEmpComponent } from './vistas/formulario-emp/formulario-emp.component';
import { FormularioTrabajosComponent } from './vistas/formulario-trabajos/formulario-trabajos.component';
import { FormularioUseComponent } from './vistas/formulario-use/formulario-use.component';
import {HomeComponent} from './vistas/home/home.component';
import {TrabajosInfoComponent} from './vistas/trabajos-info/trabajos-info.component';
import {TrabajosComponent} from './vistas/trabajos/trabajos.component';
import {ContactComponent} from './vistas/contact/contact.component';
import {LoginComponent} from './vistas/login/login.component';
import {PerfilusuarioComponent} from './vistas//perfilusuario/perfilusuario.component';
import { EstadisticaComponent } from './vistas/estadistica/estadistica.component';
import {LoginEmpComponent} from './vistas/login-emp/login-emp.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'infoTrabajos', component: TrabajosInfoComponent},
  {path: 'trabajos', component: TrabajosComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'FormEmp', component: FormularioEmpComponent},
  {path: 'FormUs', component: FormularioUseComponent},
  {path: 'FormTrabajos', component: FormularioTrabajosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'perfilUsuario', component: PerfilusuarioComponent},
  {path: 'estadistica', component: EstadisticaComponent},
  {path: 'loginEmp', component: LoginEmpComponent},
];

// @ts-ignore
@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
