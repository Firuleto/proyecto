export interface Articulo {
    nombre: String;
    marca?: String;
    precio: number;
    imprimir?;
    title?:string;
    desciption?:string;
    promotion?:boolean;
    categoria?:string;
    url?: string;
}