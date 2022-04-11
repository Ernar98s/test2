<template>
  <div id="app">
    <SyncLoader v-if="loading" />
    <div class="container" v-else>
      <VueSlickCarousel
        v-if="films.length"
        :arrows="true"
        :dots="false"
        :slidesToShow="7"
      >
        <div v-for="film in films" :key="film.id">
          <FilmPreview :filmInfo="film" @showMore="showOverview(film)" />
        </div>
      </VueSlickCarousel>
      <FilmOverview :filmInfo="filmInfo" />
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import FilmPreview from '@/components/FilmPreview.vue';
import FilmOverview from '@/components/FilmOverview.vue';

import { IMG_PATH } from '@/api/utils';
import SyncLoader from 'vue-spinner/src/SyncLoader.vue';

export default {
  name: 'App',
  data() {
    return {
      loading: true,
      films: [],
      currentFilm: 1,
      filmInfo: {},
    };
  },
  components: { VueSlickCarousel, FilmPreview, FilmOverview, SyncLoader },
  created() {
    this.$api.news.getNews(1).then((res) => {
      this.films = res.data.results;
      this.currentFilm = this.films[0];
      this.showOverview(this.films[0]);
      document.body.style.backgroundImage = `url('${IMG_PATH}${this.currentFilm.backdrop_path}')`;
      this.loading = false;
    });
  },

  methods: {
    showOverview(film) {
      this.currentFilm = film;
      this.$api.news.getFilm(this.currentFilm.id).then((res) => {
        this.filmInfo = res.data;
      });
      document.body.style.backgroundImage = `url('${IMG_PATH}${this.currentFilm.backdrop_path}')`;
    },
  },
};
</script>

<style lang="scss">
body {
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
</style>
