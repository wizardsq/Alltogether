
import { Component, OnInit } from '@angular/core';
import {EmailService} from '../../services/email-services';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( public email: EmailService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  contactForm(forms: any){
   this.email.Contacto(forms).subscribe(() => {
     console.log(forms);
   });
  }

}
