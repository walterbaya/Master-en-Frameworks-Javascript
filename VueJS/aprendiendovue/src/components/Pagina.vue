<template>
  <section id="content">
    <h2 class="subheader">Página de pruebas</h2>
    <h3>{{ id_desde_url }}</h3>
    <button @click="actualizarNombre()">Actualizar Nombre</button>
    <h4>{{nombre}}</h4>
  </section>
</template>

<script>
export default {
  name: "Pagina",
  created() {
    console.log("Componente creado!!");
  },
  mounted() {
    //se va a ejecutar ni bien se cargue el componente
    this.id_desde_url = this.$route.params.id;
    console.log("Componente montado!!");
  },
  updated() {
    console.log("Componente actualizado !!");
  },
  destroyed() {
    console.log("Componente eliminado!!");
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "Walter Baya",
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "Walter Baya Web";
      console.log(this.nombre);
    },
  },
};
</script>