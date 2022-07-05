export class Empleador{
    // tslint:disable-next-line:variable-name
    _id?: number;
    NombreEmpresa?: string;
    correo?: string;
    telefono?: string;
    telefonomovil?: string;
    sitioweb?: string;
    ubicacion?: string;
    contrasena?: string;
    categoria?: string;
    titulo?: string;
    descripcion?: string;
    informacion?: string;
    sueldo?: string;
  
    constructor(NombreEmpresa: string,  correo: string, telefono: string,  telefonomovil: string, sitioweb: string, ubicacion: string, contrasena: string, categoria: string, titulo: string,  descripcion: string,  informacion: string,  sueldo: string) {
      this.NombreEmpresa = NombreEmpresa;
      this.correo = correo;
      this.telefono = telefono;
      this.telefonomovil = telefonomovil;
      this.sitioweb = sitioweb;
      this.ubicacion = ubicacion;
      this.contrasena = contrasena;
      this.categoria = categoria;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.informacion = informacion;
      this.sueldo = sueldo;
    }
  }