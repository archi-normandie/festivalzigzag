<template>
  <section
    v-if="gallery.length"
    class="event-gallery"
  >
    <img
      v-for="(image, index) in gallery"
      :key="index"
      :src="image"
      class="event-gallery-image"
      :class="`count-${gallery.length}`"
    />
  </section>
</template>
<script>
export default {
  name: 'EventGalery',
  props: {
    gallery: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss">
.event-gallery {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  @media (min-width: 50rem) {
    grid-column: 2 / 8 ;
    grid-row: 4;
  }
  @media (min-width: 90rem) {
    grid-column: 2 / 8 ;
    grid-row: 3;
  }
  &-image {
    display: block;
    width: 100%;
    min-height: 15rem;
    max-height: 30rem;
    object-fit: cover;
    &.count-2,
    &.count-3 {
      width: 50%;
      // min-height: 15rem;
      // max-height: 30rem;
    }
    &.count-3:last-of-type {
      width: 100%;
      min-height: 30rem;
      max-height: 60rem;
    }
  }
}
</style>
