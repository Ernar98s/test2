<template>
  <div class="container">
    <SyncLoader v-if="loading" />
    <div v-else>
      <div class="film--overview">
        <img
          class="film--poster"
          :src="`${path}${filmInfo.poster_path}`"
          :alt="filmInfo.original_title"
        />
        <div class="film--info">
          <h2 style="color: white">{{ filmInfo.original_title }}</h2>
          <p style="color: white">{{ filmInfo.overview }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { IMG_PATH } from '@/api/utils';
import SyncLoader from 'vue-spinner/src/SyncLoader.vue';

export default {
  name: 'FilmOverview',
  components: { SyncLoader },
  props: {
    filmInfo: Object,
  },
  data() {
    return {
      filmData: [],
      path: IMG_PATH,
    };
  },
  mounted() {
    console.log(this.filmInfo);
  },
};
</script>

<style lang="scss" scoped>
.container {
  background: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
}

.film {
  &--overview {
    display: flex;
    justify-content: flex-start;
    gap: 30px;
  }
  &--poster {
    max-width: 30%;
    border-radius: 15px;
  }
}
</style>
