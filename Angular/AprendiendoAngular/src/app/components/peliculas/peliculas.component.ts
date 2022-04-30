import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Pelicula[];
  public favorita!: Pelicula;
  constructor() {
    this.titulo = "Componente peliculas";
    //No debe tener logica dentro, simplemente 
    //se utiliza para asignarle un valor a las propiedades
    //de la clase
    this.peliculas = [
      new Pelicula(2019,"Spiderman 4", 'https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2021/10/Spider-Man-4-Fanat.jpg?fit=1280%2C720&quality=80&ssl=1'),
      new Pelicula(2015, "Batman vs Superman", 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/batman-v-superman-el-amanecer-de-la-justicia-2016-ben-affleck-y-henry-cavill-1558006115.jpg'),
      new Pelicula( 2015, "Batman vs Superman", 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/batman-v-superman-el-amanecer-de-la-justicia-2016-ben-affleck-y-henry-cavill-1558006115.jpg') 
    ]
    console.log("Constructor lanzado!!");
  }

  ngOnInit() {
    console.log("Componente iniciado")
    console.log(this.peliculas);
  }

  ngDoCheck() {
    console.log("DO CHECK LANZADO")
  }

  ngOnDestroy(): void {
    console.log("El Componente se va a eliminar");
  }

  cambiarTitulo() {
    this.titulo = "El titulo ha sido cambiado!!";
  }

  mostrarFavorita(event: any){
    this.favorita = event.pelicula;
  }
}
