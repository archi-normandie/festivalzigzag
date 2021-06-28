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
      <EventGallery :gallery="event.gallery" />
    </div>
    <EventCover :cover="event.cover" />
    <img v-if="staticMapSrc" :src="staticMapSrc" />
  </article>
</template>

<script>
import EventCategories from '~/components/Event/Categories'
import EventBooking from '~/components/Event/Booking'
import EventCover from '~/components/Event/Cover'
import EventGallery from '~/components/Event/Gallery'

export default {
  name: 'Event',
  components: {
    EventCategories,
    EventBooking,
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
      return `${provider}?center=${lat},${lon}&zoom=12&size=1920x800@2x&markers=${lat},${lon}`
    }
  }
}
</script>
