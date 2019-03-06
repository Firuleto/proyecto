import { Articulo } from '../modelos/articulo';

export const articulosDB: Articulo [] = [
    {
        nombre:'Television 1',
        marca: 'Samsung',
        precio:4000,
        title:'Television',
        description:'34 pulgadas',
        promotion:true,
        categoria:'E',
        url:'assets/image/tv_samsung.jpg'
      },

      {
        nombre:'Television 2',
        marca: 'LG',
        precio:25000,
        title:'Television',
        description:'52 pulgadas',
        promotion:true,
        categoria:'E'
      },

      {
        nombre:'Television 3',
        marca: 'Panasonic',
        precio:1200,
        title:'Television',
        description:'42 pulgadas',
        promotion:true,
        categoria:'E'
      },

      {
        nombre:'Television 4',
        marca: 'Sony',
        precio:500,
        title:'Television',
        description:'22 pulgadas',
        promotion:true,
        categoria:'E'
      },

      {
        nombre:'Sabritas 1',
        marca: 'Sabritas',
        precio:15,
        title:'Sabritas',
        description:'papitas',
        promotion:false,
        categoria:'A'
      },

      {
        nombre:'Sabritas 2',
        marca: 'Barcel',
        precio:12,
        title:'Sabritas',
        description:'Barcel',
        promotion:true,
        categoria:'A'
      }
];