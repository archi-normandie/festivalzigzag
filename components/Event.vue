<template>
  <article
    class="event event-full"
    :class="event.featured ? 'is-featured' : null"
  >
    <div class="event-full--txt">
      <div class="inner">
        <p v-if="event.booking.message" class="messages error">
          {{ event.booking.message }}
        </p>
        <p class="event--address">
          {{ event.address.place }}
        </p>
        <EventBooking :booking="event.booking" />
        <EventCategories :categories="event.categories" />
        <h1 class="title-main">
          {{ event.title }}
        </h1>
        <div v-html="event.html" />
        <p class="avec">
          {{ event.informations.note }}
        </p>
        <p class="rdv">
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
    </div>
    <EventCover :cover="event.cover" />
    <no-ssr>
      <l-map
        v-if="event.address.lat"
        zoom="13"
        :center="[event.address.lat, event.address.lon]"
        :options="{scrollWheelZoom:false}"
      >
        <l-tile-layer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://stadiamaps.com/'>Stadia Maps</a>, &copy; <a href='https://openmaptiles.org/'>OpenMapTiles</a> &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors"
        />
        <l-marker :lat-lng="[event.address.lat, event.address.lon]" />
      </l-map>
    </no-ssr>
  </article>
</template>

<script>
import EventCategories from '~/components/Event/Categories'
import EventBooking from '~/components/Event/Booking'
import EventCover from '~/components/Event/Cover'

export default {
  name: 'Event',
  components: {
    EventCategories,
    EventBooking,
    EventCover
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  computed: {
    event () { return this.content }
  }
}
</script>
