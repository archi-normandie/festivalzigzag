<template>
  <main>
    <h1 class="title-main">
      Lieux
    </h1>
    <client-only>
      <l-map
        :zoom="9"
        :center="[49.3, 0.8]"
        :options="{scrollWheelZoom:false}"
      >
        <l-tile-layer
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}.png?api_key=ec8b4ff6-ffec-4e4f-a08b-9f52e3c4a024"
          attribution="&copy; <a href='https://stadiamaps.com/'>Stadia Maps</a>, &copy; <a href='https://openmaptiles.org/'>OpenMapTiles</a> &copy; <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors"
        />
        <v-marker-cluster>
          <EventMarker v-for="marker in events" :key="marker.slug" :marker="marker" />
        </v-marker-cluster>
      </l-map>
    </client-only>
  </main>
</template>

<script>
import EventMarker from '@/components/EventMarker.vue'

export default {
  name: 'Lieux',
  components: {
    EventMarker
  },
  computed: {
    events () {
      const contents = this.$store.state.contents.all
      const events = Object.entries(contents)
        .filter(entry => entry[1].dir === 'events')
        .map(entry => entry[1])
      return events
    }
  },
  head () {
    const url = process.env.url + '/lieux'
    const title = 'Lieux | ' + process.env.mainTitle
    const description = 'Lieux du festival Zigzag'
    return {
      title,
      bodyAttrs: {
        class: 'page-page lieux'
      },
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:url', name: 'twitter:url', content: url },
        { hid: 'twitter.title', name: 'twitter:title', content: title },
        { hid: 'twitter.description', name: 'twitter:description', content: description }
      ]
    }
  }
}
</script>
