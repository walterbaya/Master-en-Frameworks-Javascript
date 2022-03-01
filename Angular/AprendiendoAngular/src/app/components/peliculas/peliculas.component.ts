import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  constructor() {
    this.titulo = "Componente peliculas";
    //No debe tener logica dentro, simplemente 
    //se utiliza para asignarle un valor a las propiedades
    //de la clase
    console.log("Constructor lanzado!!");
   }

  ngOnInit(){
    console.log("Componente iniciado")
  }

  ngDoCheck(){
    console.log("DO CHECK LANZADO")
  }

  ngOnDestroy(): void {
      console.log("El Componente se va a eliminar");
  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado!!";
  }
}
