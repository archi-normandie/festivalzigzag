<template>
  <article
    class="event"
    :class="event.featured ? 'is-featured' : null"
  >
    <h1 class="event-title title-main">
      {{ event.title }}
    </h1>
    <div class="event-informations">
      <EventCategories :categories="event.categories" />
      <EventAddress :address="event.address" />
      <EventBooking :booking="event.booking" />
    </div>
    <EventCover :cover="event.cover" />
    <div class="event-content">
      <div v-html="event.html" />
      <p class="event-informations-note">
        {{ event.informations.note }}
      </p>
      <div class="event-separator" />
      <p class="event-informations-rdv">
        {{ event.informations.rdv }}
      </p>
    </div>
    <EventGallery :gallery="event.gallery" />
    <img v-if="staticMapSrc" :src="staticMapSrc" class="event-map"/>
  </article>
</template>

<script>
import EventCategories from '~/components/Event/Categories'
import EventBooking from '~/components/Event/Booking'
import EventAddress from '~/components/Event/Address'
import EventCover from '~/components/Event/Cover'
import EventGallery from '~/components/Event/Gallery'

export default {
  name: 'Event',
  components: {
    EventCategories,
    EventBooking,
    EventAddress,
    EventCover,
    EventGallery
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  computed: {
    event () { return this.content },
    staticMapSrc () {
      const provider = 'https://stadiamaps.com/static/alidade_smooth'
      if (!this.event.address.lat || !this.event.address.lon) { return null }
      const lat = this.event.address.lat.length <= 8 ? `${this.event.address.lat}0` : this.event.address.lat
      const lon = this.event.address.lon.length <= 8 ? `${this.event.address.lon}0` : this.event.address.lon
      return `${provider}?center=${lat},${lon}&zoom=12&size=800x340@2x&markers=${lat},${lon},outdoors,2d8d9d`
    }
  }
}
</script>
<style lang="scss">
// Mobile first < 769px
// Tablet > 769px (48rem : 768px)
// Desktop > 1024px (60rem : 1024px)
// Widescreen > 1216px (76rem: 1216px)
// Fullhd > 1408px (88rem: 1408px)
// Utiliser les zones nommée de Grid Layout (plus de flexibilités en "design in browser")
.event {
  padding-top: $padding;
  &-title { grid-area: title; }
  &-informations { grid-area: infos; }
  &-cover { grid-area: cover; }
  &-content { grid-area: content; }
  &-gallery { grid-area: gallery; }
  &-map { grid-area: map; }
  // Mobile first
  // Tablet
  @media (min-width: 48rem) {}
  // Desktop > 1024
  @media (min-width: 60rem) {
    // display: flex;
    // flex-wrap: wrap;
    display:  grid;
    // grid-template-columns: 1.5rem repeat(6, 1fr) 1.5rem;
    grid-template-columns: 1.5rem repeat(3, 1fr) 1.5rem;
    // grid-auto-rows: minmax(100px, auto);
    grid-template-areas:
    ". title title title ."
    ". infos cover cover ."
    ". . content content ."
    ". gallery gallery gallery ."
    ". map map map .";
  }
  @media (min-width: 76rem) {
    // grid-template-columns: 1.5rem repeat(6, 1fr) 1.5rem;
    grid-template-areas:
    ". title title title  ."
    ". infos cover cover ."
    ". . content . ."
    ". gallery gallery gallery ."
    ". map map map .";
  }
  @media (min-width: 88rem) {
    grid-template-columns: 1.5rem repeat(6, 1fr) 1.5rem;
    grid-template-areas:
    ". title title title title title title ."
    ". infos content content cover cover cover ."
    ". . gallery gallery gallery gallery gallery ."
    ". . map map map map map .";
  }
  &-title {
    text-align: center;
    text-align: left;
    text-transform: uppercase;
    font-weight: $bold;
    // @media (min-width: 60rem) {
    //   grid-column: 2 / 8;
    //   grid-row: 1;
    // }
  }
  &-informations {
    // margin: 0 auto;
    padding: $paddings;
    // @media (min-width: 50rem) { flex-basis: 50%; }
    // @media (min-width: 60rem) {
    //   grid-column: 2 / 4;
    //   grid-row: 2;
    // }
    // @media (min-width: 88rem) {
    //   grid-column: 2 / 3 ;
    //   grid-row: 2;
    // }
  }
  &-cover { padding: $paddings; }
  &-gallery { padding: $paddings; }
  &-map { padding: $paddings; }
  &-content {
    margin: 0 auto;
    padding: $paddings;
    padding-bottom: $padding;
    // @media (min-width: 50rem) { flex-basis: 50%; }
    // @media (min-width: 48rem) {
    //   grid-column: 2 / 4;
    //   grid-row: 3;
    // }
    // @media (min-width: 88rem) {
    //   grid-column: 3 / 5 ;
    //   grid-row: 2;
    // }
  }
  &-separator {
    width: 2rem;
    height: 0.25rem;
    margin: $margins;
    background-color: $primary;
  }
  &-informations {
    &-note { font-weight: $bold; }
  }
  &-map {
    display: block;
    width: 100%;
    min-height: 240px;
    max-height: 480px;
    object-fit: cover;
    margin-bottom: 1.5rem;
    // @media (min-width: 50rem) {
    //   grid-column: 2 / 8;
    //   grid-row: 4;
    // }
    // @media (min-width: 88rem) {
    //   grid-row: 3;
    // }
  }
}
</style>
