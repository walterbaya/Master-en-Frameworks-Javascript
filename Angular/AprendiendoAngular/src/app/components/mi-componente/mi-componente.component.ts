import {Component} from '@angular/core';

@Component({
    selector: 'mi-componente',
    templateUrl:  './mi-componente.html'
})

export class MiComponente{

    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean;

    constructor(){
       this.titulo = "Hola Mundo";
       this.comentario = "Comentario loco.";
       this.year = 2020;
       this.mostrarPeliculas = true;

        console.log(this.titulo);
        console.log(this.year);
        console.log(this.comentario);
        console.log("Componente Cargado.")
    }

    ocultarPeliculas(){
        this.mostrarPeliculas = false;
    }
}