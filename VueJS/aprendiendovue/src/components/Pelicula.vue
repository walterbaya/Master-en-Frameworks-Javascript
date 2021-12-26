<template>
  <div>
    <article class="article-item">
      <div class="image-wrap">
        <img
          :src="pelicula.image"
          :alt="pelicula.title"
          :title="pelicula.title"
        />
      </div>

      <h2>{{ pelicula.title }}</h2>
      <span
        class="date"
        v-bind:class="{
          yeargreen: pelicula.year >= 2015,
          yearred: pelicula.year < 2015,
        }"
      >
        {{ pelicula.year }}
      </span>
      <a href="#">Leer más</a>
      <input
        type="button"
        value="Marcar como favorita"
        @click="pasarFavoritaAlPadre(pelicula)"
      />
      <div class="clearfix"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Pelicula',
  props: ['pelicula'],
  methods: {
    pasarFavoritaAlPadre(pelicula) {
      alert("Botón pulsado");
      console.log(pelicula);
      this.$emit('favorita', pelicula);
    },
  },
};
</script>