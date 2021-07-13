<template>
  <main>
    <div class="wrapper">
      <h1 class="title-main">
        Agenda
      </h1>
      <div class="content-main--header">
        <div
          :class="blockAgendaHeader.classes"
          class="is-primary"
          v-html="blockAgendaHeader.html"
        />
      </div>
      <div class="events-filter buttons">
        <button
          class="button button-small"
          :class="isCurrentCity(city) ? 'is-current' : null"
          v-for="(city, index) in cities"
          :key="index"
          @click="setCurrentCity(city)"
        >
          {{ city.name }}
        </button>
      </div>
      <div class="events">
        <EventTeaser
          v-for="event in filteredEventByCities"
          :key="event.slug"
          :event="event"
          :class="event.featured ? 'event-pinned is-featured' : null"
        />
      </div>
    </div>
  </main>
</template>

<script>
import EventTeaser from '~/components/Event/Teaser'
export default {
  name: 'Agenda',
  components: {
    EventTeaser
  },
  data () {
    return {
      currentCity: 'Toutes'
    }
  },
  computed: {
    events () {
      const contents = this.$store.state.contents.all
      const events = Object.entries(contents)
        .filter(entry => entry[1].dir === 'events')
        .map(entry => entry[1])
      // Featured first
      return events.sort(event => !event.featured)
    },
    regularEvents () {
      return this.events
        .filter(event => !event.featured)
        .sort((a, b) => {
          if (!a.booking.dates[0] || !b.booking.dates[0]) { return 0 }
          return new Date(a.booking.dates[0].date).getTime() - new Date(b.booking.dates[0].date).getTime()
        })
    },
    featuredEvents () {
      return this.events.filter(event => event.featured)
    },
    blockAgendaHeader () {
      return this.$store.state.contents.all['agenda-header']
    },
    cities () {
      const cities = this.events
        .map(event => event.address.place)
        .filter((city, index, cities) => cities.indexOf(city) === index)
        .filter(city => city !== '')
        .map((city) => {
          return {
            name: city
          }
        })
        .sort((a, b) => a - b)
      return [{ name: 'Toutes' }].concat(cities)
    },
    filteredEventByCities () {
      if (this.currentCity === 'Toutes') { return this.events }
      return this.events.filter(event => event.address.place === this.currentCity)
    }
  },
  methods: {
    isCurrentCity (city) { return city.name === this.currentCity },
    setCurrentCity (city) { this.currentCity = city.name }
  },
  head () {
    const url = process.env.url + '/agenda'
    const title = 'Agenda | ' + process.env.mainTitle
    const description = 'Agenda du festival Zigzag'
    return {
      title,
      bodyAttrs: {
        class: 'events'
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
<style lang="scss">
.events {
  padding: $paddings-large;
  &-filter {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
}
</style>
