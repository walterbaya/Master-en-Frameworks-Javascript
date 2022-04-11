<template>
    <div id="articles-list">
        <article class="article-item" v-for="article in articles" :key="article.id">
            <div class="image-wrap">
                <img
                    :src="url + 'get-image/' + article.image"
                    :alt="article.title"
                    v-if="article.image"
                />
            </div>
            <h2>Articulo de prueba</h2>
            <span class="date">Hace 5 minutos</span>
            <a href="#">Leer más</a>
            <div class="clearfix"></div>
        </article>
    </div>
</template>

<script>
import Global from '../Global';

export default {
    name: 'Articles',
    props: { articles: Object },
    data() {
        return {
            url: Global.url
        }
    }
}

</script>