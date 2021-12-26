<!--Esta relacionado con la vista-->
<template>
  <div id="mi-componente">
    <hr />
    <h1>Este es Mi Componente</h1>
    <h2>{{ subtitulo }}</h2>
    <hr />
    <h2>Reactividad</h2>
    <input type="text" v-model="nombre" />
    Mi nombre es: <strong>{{ nombre }}</strong>
    <!--<pre>
      {{$data}}
    </pre>-->
    <h2>Directivas condicionales</h2>
    <input type="number" v-model="edad" />
    Mi edad es:<strong>{{ edad }}</strong>
    <p class="alert-danger-provisional" v-if="edad && edad >=18 && edad < 65">ERES MAYOR DE EDAD.</p>
    <p class="alert-purple-provisional" v-else-if="edad && edad>=65">ERES DE EDAD AVANZADA</p>
    <p class="alert-success-provisional" v-else>ERES MEOR DE EDAD.</p>
    <h2>Directiva iterativa</h2>
    <ol>
      <li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>
    </ol>
  </div>
</template>

<!--Aca va todo lo de vue propiamente-->
<script>
export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "Soy el subtitulo de mi componente",
      nombre: "",
      edad: 18,
      peliculas: ['Batman vs Superman', 'El señor de los anillos', 'Spiderman','Anabelle'],
    };
  },
};
</script>
