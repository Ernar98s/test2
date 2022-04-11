<template>
  <div
    @click="$emit('showMore', filmInfo.backdrop_pathw)"
    class="preview--container"
  >
    <div style="position: relative">
      <img class="preview--poster" :src="`${path}${filmInfo.poster_path}`" />
      <PercentageCircle
        class="absolute"
        :size="'medium'"
        :percent="filmInfo.popularity"
        :animate="true"
        :active-color="'blue'"
        :complete-color="'green'"
      />
    </div>
    <h4 class="preview--title">
      {{ filmInfo.title ? filmInfo.title : filmInfo.name }}
    </h4>
  </div>
</template>

<script>
import { IMG_PATH } from '@/api/utils';
import PercentageCircle from 'vue-css-percentage-circle';

export default {
  name: 'FilmPreview',
  components: {
    PercentageCircle,
  },
  props: {
    filmInfo: Object,
  },
  data() {
    return {
      path: IMG_PATH,
    };
  },
};
</script>

<style lang="scss" scoped>
.preview {
  &--container {
    width: 150px;
    display: flex;
    flex-direction: column;
    padding-bottom: 15px;
    border-radius: 5px;
    background: white;
    height: 350px;
    border-radius: 15px;
  }

  &--poster {
    width: 100%;
    height: auto;
    margin: 0 auto;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    min-height: 220px;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
  }

  &--title {
    color: black;
    padding: 5px;
    font-size: 1vw;
  }
}

.absolute {
  position: relative;
  margin: auto;
  margin-top: -25px;
}

.c100 {
  color: black !important;
}
</style>
