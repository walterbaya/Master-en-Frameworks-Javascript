import Vue from 'vue'
import App from './App.vue'
import MiComponente from './components/LastArticles.vue'
import LastArticles from './components/MiComponente.vue'
import Blog from './components/Blog.vue'
import Pagina from './components/Pagina.vue'
import Formulario from './components/Formulario.vue'
import ErrorComponent from './components/ErrorComponent.vue'
//Para instalar el router y asi poder tener navegacion
//con vue, tenemos que ir a la pagina de vue router y seguir las
//instrucciones 
//Luego importamos el router
import VueRouter from 'vue-router';

Vue.config.productionTip = false

//cargamos el router dentro de vue.
Vue.use(VueRouter);

//configuramos las rutas aquí dentro
const routes = [
  {path: '/home', component: MiComponente},
  {path: '/blog', component: Blog},
  //Con el ? el parametro es opcional.
  {path: '/pagina/:id?', name: 'pagina', component: Pagina},
  {path: '/formulario', component: Formulario},
  {path: '/ultimos-articulos', component: LastArticles},
  {path: '/mi-componente', component: LastArticles},
  {path: '/', component: MiComponente},
  {path: '*', component: ErrorComponent}
]

//cargamos el vue router.
//se dan de alta todas las rutas.

const router = new VueRouter({
  routes,
  mode: 'history'
});

//damos de alta el router para que funcioens de manera global y lo cargue en las instancia de vue.
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

//Asi de facil.