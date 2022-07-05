export class Correo{
  // tslint:disable-next-line:variable-name
  nombre?: string;
  correo?: string;
  message?: string;

  constructor(nombre: string, correo: string, message?: string) {
    this.nombre = nombre;
    this.correo = correo;
    this.message = message;
  }
}
