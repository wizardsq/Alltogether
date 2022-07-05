import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:typedef
  Contacto(body: any){
    return this.http.post('http://localhost:4000/forms', body);
  }
}
