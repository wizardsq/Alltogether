import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './vistas/home/home.component';
import { TrabajosComponent } from './vistas/trabajos/trabajos.component';
import { TrabajosInfoComponent } from './vistas/trabajos-info/trabajos-info.component';
import { FormularioEmpComponent } from './vistas/formulario-emp/formulario-emp.component';
import { FormularioUseComponent } from './vistas/formulario-use/formulario-use.component';
import { FormularioTrabajosComponent } from './vistas/formulario-trabajos/formulario-trabajos.component';
import {ContactComponent} from './vistas/contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './vistas/login/login.component';
import {ToasterModule} from 'angular2-toaster';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EstadisticaComponent } from './vistas/estadistica/estadistica.component';
import {MatRadioModule} from '@angular/material/radio';
import { ChartsModule } from 'ng2-charts';
import { LoginEmpComponent } from './vistas/login-emp/login-emp.component';



// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    FooterComponent,
    HomeComponent,
    TrabajosComponent,
    TrabajosInfoComponent,
    FormularioEmpComponent,
    FormularioUseComponent,
    FormularioTrabajosComponent,
    ContactComponent,
    LoginComponent,
    EstadisticaComponent,
    LoginEmpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToasterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatChipsModule,
    DragDropModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ChartsModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
