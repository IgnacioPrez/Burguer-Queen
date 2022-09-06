import carmelita from '../assets/img/carmelita.jpeg'
import simple from '../assets/img/simple.jpeg'
/* import amilcarBrusa from '../assets/img/amilcarBrusa.jpeg'
 */import bajom from '../assets/img/bajom.jpeg'
import burguerPizza from '../assets/img/pizzaBurguer.jpeg'
import peque from '../assets/img/peque.jpeg'
import burguerSorpresa from '../assets/img/burguerSorpresa.jpeg'
import clasica from '../assets/img/clasica.jpeg'
import papasCheddar from '../assets/img/papasCheddar.jpeg'

export const burguerProductos = [
    {
        name:'Clásica',
        img:clasica,
        price:740,
        ingredient:['carne','panceta','cheddar','paleta','huevo frito','tomate'],
    },
    {
        name:'Simple',
        img:simple,
        price:670,
        ingredient:['carne','queso cremoso','paleta','huevo batido','tomate'],
    },
    {
        name:'Pizza Burguer',
        img:burguerPizza,
        price:860,
        ingredient:['salsa p/pizza','queso cremoso','oregano','carne','cheddar','paleta','huevo frito','rucula','tomate'],
    },
    {
        name:'Amilcar Brusa',
        img:bajom,
        price:750,
        ingredient:['carne','cheddar','paleta','huevo frito','tomate','cebolla morada'],
    },
    {
        name:'La Peque',
        img:peque,
        price:410,
        ingredient:['carne','cheddar','paleta'],
    },
    {
        name:'La Bajom',
        img:bajom,
        price:1150,
        ingredient:['doble carne','panceta','tomate','cebolla morada','huevo frito','barbacoa','paleta','cheddar'],
    },
    {
        name:'Burguer Sorpresa',
        img:burguerSorpresa,
        price:680,
        ingredient:['carne','cheddar','paleta'],
        toys:2
    },
    {
        name:'Carmelita',
        img:carmelita,
        price:840,
        ingredient:['carne','panceta','tomate','cebolla morada','barbacoa'],
    }
]

export const friesProducts =[
    {
        name:'Papas con cheddar',
        img:papasCheddar,
        price:600,
        ingredient:['papas','cheddar','panceta'],
    },
    {
        name:'Papas con cheddar',
        img:papasCheddar,
        price:600,
        ingredient:['papas','cheddar','panceta'],
    },
    {
        name:'Papas con cheddar',
        img:papasCheddar,
        price:600,
        ingredient:['papas','cheddar','panceta'],
    },
    {
        name:'Papas con cheddar',
        img:papasCheddar,
        price:600,
        ingredient:['papas','cheddar','panceta'],
    },
    
]