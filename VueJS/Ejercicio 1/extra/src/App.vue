<template>
  <div id="app">
    <cabecera></cabecera>
    <main class="container">
      <ParteIzquierda></ParteIzquierda>
      <ParteDerecha></ParteDerecha>
      <Articulo></Articulo>
    </main>
    <footer></footer>
  </div>
</template>

<script>
import cabecera from "./components/cabecera.vue";
import ParteIzquierda from "./components/ParteIzquierda.vue";
import ParteDerecha from "./components/ParteDerecha.vue";
import Articulo from "./components/Articulo.vue";

export default {
  name: "App",
  components: {
    cabecera,
    ParteIzquierda,
    ParteDerecha,
    Articulo,
  },
};
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css";
@import "./assets/css/extra.css";
</style>
