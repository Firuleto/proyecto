import {Electronico} from './electronico';

export class Samsung extends Electronico{

    constructor(){
        super();
    }

    public setPrecio(precio:number){
        this.precio=precio;
    }

    public getCategoria():String{
        return this.categoria;
    }
}
