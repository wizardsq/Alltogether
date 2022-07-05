export class Trabajos{
    // tslint:disable-next-line:variable-name
    _id?: number;
    correo?: string;
    telefono?: string;
    telefonomovil?: string;
    categoria?: string;
    titulo?: string;
    descripcion?: string;
    sueldo?: string;
    
  
    constructor(correo: string,  telefono: string, telefonomovil: string,  categoria: string, titulo: string, descripcion: string, sueldo: string) {
      this.correo = correo;
      this.telefono = telefono;
      this.telefonomovil = telefonomovil;
      this.categoria = categoria;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.sueldo = sueldo;
      
    }
  }
  