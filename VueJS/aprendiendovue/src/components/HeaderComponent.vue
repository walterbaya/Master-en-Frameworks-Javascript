<template>
  <header>
    <div class="center">
      <!--LOGO-->
      <div id="logo">
        <img src="../assets/images/logo.png" class="app-logo" alt="logotipo" />
        <span id="brand"> <strong>Curso</strong>React </span>
      </div>
      <!--MENU-->
      <nav id="menu">
        <ul>
          <li>
            <router-link to="/home"> Inicio</router-link>
          </li>
          <li>
            <router-link to="/blog">Blog</router-link>
          </li>
          <li>
            <router-link to="/formulario">Formulario</router-link>
          </li>
          <li>
            <router-link :to="{name:'pagina', params: {id: 'Soy el valor del parametro'}}">Página 1</router-link>
          </li>
          <li>
            <router-link to="/pagina">Página 2</router-link>
          </li>
        </ul>
      </nav>
      <div class="clearfix"></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
};
</script>