<template>
  <div id="izquierda">
    <section>
      <h1>SERVICIOS</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        dignissimos repellendus ipsum nihil sit sint provident fugit reiciendis,
        eaque vero, laborum expedita rem quae est dicta ad necessitatibus a
        adipisci!Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
        dignissimos repellendus ipsum nihil sit sint provident fugit reiciendis,
        eaque vero, laborum expedita rem quae est dicta ad necessitatibus a
        adipisci!
      </p>

      <p class="servicios">SERVICIOS FINANCIEROS</p>
      <p class="servicios">SERVICIOS MERCANTILES</p>
    </section>

    <section>
      <h1>CONTACTO</h1>

      <form>
        <div>
          <label for="nombre">NOMBRE</label>
          <br />
          <div class="obligatorio">
            <input type="text" name="nombre" id="nombre" />
            <p>OBLIGATORIO</p>
          </div>
        </div>

        <div>
          <label for="nombre">APELLIDO</label>
          <br />
          <div class="obligatorio">
            <input type="text" name="apellido" id="apellido" />
            <p>OBLIGATORIO</p>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {
  name: "ParteIzquierda",
};
</script>
