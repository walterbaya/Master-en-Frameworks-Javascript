<template>
  <div>
    <Slider></Slider>
    <div class="center"></div>
    <section id="content">
      <h2 class="subheader">Peliculas</h2>
      <div class="mis-datos" v-if="misDatos">
       <span  v-html="misDatos"></span>
       <br/>
       {{web | mayusculas | concatenaYear("Este es el mejor año")}}   
      </div>
      <div class="favorita" v-if="favorita">
        <h2>{{ favorita.title }}</h2>
      </div>
      <!--Listado articulos-->
      <div id="articles">
        <div v-for="pelicula in peliculasMayuscula" v-bind:key="pelicula.title">
          <Pelicula
            :pelicula="pelicula"
            v-on:favorita="haLlegadoLaPeliculaFavorita"
          ></Pelicula>
        </div>
      </div>
    </section>
    <Sidebar></Sidebar>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Pelicula from "./Pelicula.vue";
import Sidebar from "./Sidebar.vue";

export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar,
  },
  methods: {
    haLlegadoLaPeliculaFavorita(favorita) {
      this.favorita = favorita;
    },
  },
  filters:{
    mayusculas(value) {
      return value.toUpperCase();
    },
    concatenaYear(value, message){
      var date = new Date();
      return value + ' ' + date.getFullYear() + ' ' + message;
    }
  },
  computed: {
    peliculasMayuscula(){
      var peliculasMod = this.peliculas;
      for (let i = 0; i < this.peliculas.length; i++) {
        peliculasMod[i].title = peliculasMod[i].title.toUpperCase(); 
      }
      return peliculasMod;
    },
    misDatos(){
      return this.nombre + ' ' + this.apellidos + '<br/>' + this.sitioWeb;
    }
  },
  data() {
    return {
      nombre: "Walter",
      apellidos: "Baya",
      sitioWeb: "www.algo",
      favorita: null,
      peliculas: [
        {
          title: "Batman vs Superman",
          year: 2017,
          image:
            "https://i.blogs.es/503736/batman-v-superman-la-pelicula-2016-imagen-blogdecine/1366_2000.jpg",
        },
        {
          title: "Gran torino",
          year: 2015,
          image:
            "data:image/jpeg;base64,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",
        },
        {
          title: "El señor de los anillos",
          year: 2003,
          image:
            "https://as01.epimg.net/meristation/imagenes/2021/07/07/noticias/1625672419_027507_1625737804_noticia_normal.jpg",
        },
      ],
    };
  },
};
</script>
