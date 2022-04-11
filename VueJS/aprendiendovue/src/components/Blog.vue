<template>
  <div>
    <Slider texto="Blog"></Slider>
    <div class="center"></div>
    <section id="content">
      <h1 class="subheader">Blog</h1>
      <div id="articles">
          <Articles :articles="articles">

          </Articles>
      </div>
    </section>
    <Sidebar></Sidebar>
    <div class="clearfix"></div>
  </div>
</template>

<script>
import Slider from "./Slider.vue";
import Sidebar from "./Sidebar.vue";
import Articles from "./Articles";
import axios from "axios";
import Global from '../Global';

export default {
  name: "Blog",
  components: {
    Slider,
    Sidebar,
    Articles
},
  mounted() {
    this.getArticles();
  },
  data() {
    return {
      url: Global.url,
      articles: []
    }
  },
  methods: {
    getArticles() {
      axios.get(this.url + 'articles')
        .then(res => {
          if (res.data.status == 'success') {
            this.articles = res.data.articles;
            console.log(this.articles);
          }
        });
    }
  }
};
</script>