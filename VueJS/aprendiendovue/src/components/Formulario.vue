<template>
  <div>
    <section id="content">
      <h2 class="subheader">Formulario</h2>
    </section>
    <Sidebar></Sidebar>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
export default {
  name: "Formulario",
  components: {
    Sidebar,
  }
};
</script>