<template>
  <figure class="event-cover">
    <img
      class="event-cover-image"
      v-if="cover.src"
      :alt="cover.alt"
      :src="cover.src"
      :srcset="
        `/files/derivatives/small/${imageName} 480w,
        /files/derivatives/medium/${imageName} 799w,
        /files/derivatives/large/${imageName} 1280w,
        /files/derivatives/giant/${imageName} 1600w`"
    >
    <img
      class="event-cover-image"
      v-else
      alt="Couverture d'évenement par défaut"
      src="/files/giant/default.png"
      srcset="
        /files/small/default.png 480w,
        /files/medium/default.png 799w,
        /files/large/default.png 1280w,
        /files/giant/default.png 1600w"
    >
    <figcaption v-if="cover.legend" class="event-cover-caption">
      {{ cover.legend }}
    </figcaption>
  </figure>
</template>
<script>
import path from 'path'
export default {
  name: 'EventCover',
  props: {
    cover: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageName () {
      return path.basename(this.cover.src)
    }
  }
}
</script>
<style lang="scss">
.event-cover {
  margin: 0;
  @media (min-width: 50rem) {
    grid-column: 4 / 8 ;
    grid-row: 1 / 3;
  }
  @media (min-width: 88rem) {
    grid-column: 5 / 8 ;
    grid-row: 1 / 3;
  }
  &-image {
    display: block;
    width: 100%;
    min-height: 15rem;
    max-height: 30rem;
    object-fit: cover;
  }

  &-caption {
    font-size: $fs14;
    font-style: italic;
    color: $grey-dark;
    padding: $paddings;
  }
}
</style>
