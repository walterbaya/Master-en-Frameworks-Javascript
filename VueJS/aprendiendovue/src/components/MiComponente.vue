<!--Esta relacionado con la vista-->
<template>
  <div id="mi-componente">
    <hr/>
    <h1>Este es Mi Componente</h1>
    <h2>{{ subtitulo }}</h2>
    <hr/>
  </div>
</template>

<!--Aca va todo lo de vue propiamente-->
<script>
export default {
  name: "MiComponente",
  data() {
    return {
      subtitulo: "Soy el subtitulo de mi componente",
    };
  },
};
</script>
