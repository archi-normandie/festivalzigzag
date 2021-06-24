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
        <p v-if="event.cover.legend" class="copyright">
          © {{ event.cover.legend }}
        </p>
      </div>
    </div>
    <div class="event-full--img">
      <img
        v-if="event.cover.src"
        :alt="event.cover.alt"
        :src="event.cover.src"
        :srcset="
          `/files/derivatives/small/${imageName} 480w,
          /files/derivatives/medium/${imageName} 799w,
          /files/derivatives/large/${imageName} 1280w,
          /files/derivatives/giant/${imageName} 1600w`"
      >
      <img
        v-else
        alt="Couverture d'évenement par défaut"
        src="/files/giant/default.png"
        srcset="
          /files/small/default.png 480w,
          /files/medium/default.png 799w,
          /files/large/default.png 1280w,
          /files/giant/default.png 1600w"
      >
    </div>
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
import path from 'path'
import EventCategories from '~/components/Event/Categories'
import EventBooking from '~/components/Event/Booking'

export default {
  name: 'Event',
  components: {
    EventCategories,
    EventBooking
  },
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  computed: {
    event () { return this.content },
    imageName () {
      return path.basename(this.event.cover.src)
    }
  }
}
</script>
