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
          <ul v-for="date in marker.dates" :key="date.render" class="event--dates">
            <li>{{ date.render }}</li>
          </ul>
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
