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
        <p v-if="content.copyright" class="copyright">
          © {{ content.copyright }}
        </p>
      </div>
    </div>
    <div class="event-full--img">
      <img
        v-if="content.image"
        :alt="content.title"
        :src="content.image"
        :srcset="
          `/files/derivatives/small/${imageName} 480w,
          /files/derivatives/medium/${imageName} 799w,
          /files/derivatives/large/${imageName} 1280w,
          /files/derivatives/giant/${imageName} 1600w`"
      >
      <img
        v-else
        :alt="content.title"
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
        v-if="content.lat"
        zoom="12"
        :center="[content.lat, content.lon]"
        :options="{scrollWheelZoom:false}"
      >
        <l-tile-layer
          url="http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OSM</a>, Tiles by <a href='https://www.hotosm.org/' target='_blank'>Humanitarian OSM Team</a> hosted by <a href='https://openstreetmap.fr/' target='_blank'>OSM France</a>"
        />
        <l-marker :lat-lng="[content.lat, content.lon]" />
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
      return path.basename(this.content.image)
    }
  }
}
</script>
