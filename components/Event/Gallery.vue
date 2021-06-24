<template>
  <section
    v-if="gallery.length"
    class="event-gallery"
    :class="`count-${gallery.length}`"
  >
    <img
      v-for="(image, index) in gallery"
      :key="index"
      :src="image"
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
  &.count-2 img,
  &.count-3 img {
    width: 50%;
  }
  &.count-3 img:last-of-type {
    width: 100%;
  }
}
</style>
