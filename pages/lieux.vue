<template>
  <main>
    <h1 class="title-main">
      Lieux
    </h1>
    <no-ssr>
      <l-map
        :zoom="9"
        :center="[49.3, 0.8]"
        :options="{scrollWheelZoom:false}"
      >
        <l-tile-layer
          url="http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OSM</a>, Tiles by <a href='https://www.hotosm.org/' target='_blank'>Humanitarian OSM Team</a> hosted by <a href='https://openstreetmap.fr/' target='_blank'>OSM France</a>"
        />
        <v-marker-cluster>
          <EventMarker v-for="marker in events" :key="marker.slug" :marker="marker" />
        </v-marker-cluster>
      </l-map>
    </no-ssr>
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
