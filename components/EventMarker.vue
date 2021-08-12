<template>
  <l-marker
    :lat-lng="[marker.address.lat, marker.address.lon]"
    :icon="icon"
    :icon-size="[32,32]"
    :icon-anchor="[16,0]"
  >
    <l-popup>
      <article class="event-map-popup">
        <nuxt-link :to="marker.slug">
          <p class="event--address">
            {{ marker.address.place }}
          </p>
          <h1 class="event--title">
            {{ marker.title }}
          </h1>
          <template v-if="marker.booking">
            <p v-if="marker.booking.period" class="event-booking-dates">
              {{ marker.booking.period }}
            </p>
            <template v-else>
              <ul v-if="marker.booking.dates.length" class="event-booking-dates">
                <li
                  v-for="(date, index) in marker.booking.dates"
                  :key="index"
                >
                  {{ date.date | prettyDate }}
                </li>
              </ul>
            </template>
          </template>
          <p class="event--category">
            {{ marker.categories[0] }}
          </p>
          <p v-if="marker.message" class="messages error">
            {{ marker.message }}
          </p>
        </nuxt-link>
      </article>
    </l-popup>
  </l-marker>
</template>

<script>
// let L = { icon () {} }
// if (process.browser) { L = require('leaflet') }
export default {
  name: 'EventMarker',
  props: {
    marker: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      icon: this.$L.icon({
        iconUrl: 'icon-map.png'
      })
    }
  }
}
</script>
