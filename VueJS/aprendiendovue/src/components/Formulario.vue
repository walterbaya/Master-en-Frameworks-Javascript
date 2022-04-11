<template>
  <form action v-on:submit.prevent="showData" style="width:500px; margin-left: 20em">
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" v-model="user.name" />
      <div v-if="submitted & !$v.user.nombre.required">Este Campo es requerido</div>
      <div v-if="submitted & !$v.user.nombre.minLength">Este Campo debe tener mas letras</div>
    </div>
    <br />
    <div>
      <label for="biography">Biography</label>
      <textarea name="biography" v-model="user.biography"></textarea>
      <div v-if="!$v.user.nombre.required">Este Campo es requerido</div>
      <div v-if="!$v.user.biography.minLength">Este Campo debe tener mas letras</div>
    </div>
    <br />
    <div>
      <input type="radio" name="gender" value="male" v-model="user.gender" />Male
      <input type="radio" name="gender" value="women" v-model="user.gender" />Women
      <input type="radio" name="gender" value="other" v-model="user.gender" />Other
    </div>
    <div v-if="!$v.user.nombre.required">Este Campo es requerido</div>
    <br />
    <input type="submit" value="Send" />
  </form>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "Formulario",
  validations: {
    user: {
      nombre: {
        required,
        minLength: minLength(2),
      },
      apellidos: {
        required,
        minLength: minLength(2),
      },
      biography: {
        required,
        minLength: minLength(10),
      }
    }
  },
  data() {
    return {
      submitted: false,
      user: {
        name: '',
        biography: '',
        gender: ''
      }
    }
  },
  methods: {
    showData: function () {
      console.log("name is: " + this.user.name + " biography is: " + this.user.biography + " gender is: " + this.user.gender)
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }
      else {
        alert("Validacion pasada");
      }
    }
  }
};
</script>