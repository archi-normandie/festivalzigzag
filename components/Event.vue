<template>
  <article
    class="event"
    :class="event.featured ? 'is-featured' : null"
  >
    <div class="event-informations">
      <EventAddress :address="event.address" />
      <EventBooking :booking="event.booking" />
      <EventCategories :categories="event.categories" />
    </div>
    <div class="event-content">
      <h1 class="title-main event-title">
        {{ event.title }}
      </h1>
      <div v-html="event.html" />
      <p class="event-informations-note">
        {{ event.informations.note }}
      </p>
      <div class="event-separator" />
      <p class="event-informations-rdv">
        {{ event.informations.rdv }}
      </p>
      <p class="buttons">
        <a
          v-for="button in content.buttons"
          :key="button.url"
          :href="button.url"
          class="button"
          target="_blank"
        >
          {{ button.text }}
        </a>
      </p>
    </div>
    <EventCover :cover="event.cover" />
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
      return `${provider}?center=${lat},${lon}&zoom=12&size=800x600@2x&markers=${lat},${lon}`
    }
  }
}
</script>
<style lang="scss">
.event {
  padding-top: $padding;
  &-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: $bold;
  }
  @media (min-width: 50rem) {
    // display: flex;
    // flex-wrap: wrap;
    display:  grid;
    grid-template-columns: 1.5rem repeat(6, 1fr) 1.5rem;
    grid-auto-rows: minmax(100px, auto);
  }
  &-informations {
    margin: 0 auto;
    padding: $paddings;
    // @media (min-width: 50rem) { flex-basis: 50%; }
    @media (min-width: 50rem) {
      grid-column: 2 / 4;
      grid-row: 1;
    }
    @media (min-width: 90rem) {
      grid-column: 2 / 3 ;
      grid-row: 1;
    }
  }
  &-content {
    margin: 0 auto;
    padding: $paddings;
    padding-bottom: $padding;
    // @media (min-width: 50rem) { flex-basis: 50%; }
    @media (min-width: 50rem) {
      grid-column: 2 / 4;
      grid-row: 2;
    }
    @media (min-width: 90rem) {
      grid-column: 3 / 5 ;
      grid-row: 1;
    }
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
    @media (min-width: 50rem) {
      grid-column: 2 / 8;
      grid-row: 3;
    }
    @media (min-width: 90rem) {
      grid-row: 2;
    }
  }
}
</style>
