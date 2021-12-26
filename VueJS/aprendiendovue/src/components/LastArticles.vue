<template>
  <div>
    <Slider texto="Bienvenido al curso de programación con VUE"
    home="true"></Slider>
    <div class="center"></div>
    <section id="content">
      <h2 class="subheader">Ultimos articulos</h2>
      <!--Listado articulos-->
      <div id="articles">
        <article class="article-item" id="article-template">
          <div class="image-wrap">
            <img src="../assets/images/paisaje.jpg" alt="Paisaje" />
          </div>

          <h2>Articulo de prueba</h2>
          <span class="date"> Hace 5 minutos </span>
          <a href="#">Leer más</a>
          <div class="clearfix"></div>
        </article>
      </div>
    </section>
    <Sidebar></Sidebar>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
export default {
  name: "LastArticles",
  components: {
    Slider,
    Sidebar,
  },
};
</script>
