export class Usuarios{
  // tslint:disable-next-line:variable-name
  _id?: number;
  nombre?: string;
  fechaNac?: string;
  correo?: string;
  telefono?: string;
  telefonomovil?: string;
  contrasena?: string;
  nombreusuario?: string;
  genero?: string;
  informacion?: string;
  dedicas?: string;

  constructor(nombre: string,  correo: string, telefono: string,  telefonomovil: string, contrasena: string, nombreusuario: string, genero: string, informacion: string, fechaNac: string, dedicas: string) {
    this.nombre = nombre;
    this.fechaNac = fechaNac;
    this.correo = correo;
    this.telefono = telefono;
    this.telefonomovil = telefonomovil;
    this.contrasena = contrasena;
    this.nombreusuario = nombreusuario;
    this.genero = genero;
    this.informacion = informacion;
    this.dedicas = dedicas;
  }
}
