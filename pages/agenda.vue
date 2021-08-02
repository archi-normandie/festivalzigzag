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
      <div>
        <button
          class="button button-small"
          :class="isSortedBy('city') ? 'is-current' : null"
          @click="setSortedBy('city')"
        >
          Afficher par ville
        </button>
        <button
          class="button button-small"
          :class="isSortedBy('date') ? 'is-current' : null"
          @click="setSortedBy('date')"
        >
          Afficher par date
        </button>
      </div>
      <div class="events">
        <div
          v-for="(groupedEvents, index) in sortedEvents"
          :key="index"
        >
          <h2 class="event event-pinned event-teaser">
            {{ groupedEvents.name }}
          </h2>
          <EventTeaser
            v-for="event in groupedEvents.events"
            :key="event.slug"
            :event="event"
            :class="event.featured ? 'event-pinned is-featured' : null"
          />
        </div>
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
    this.defaultCity = { name: 'Toutes' }
    this.defaultType = { name: 'Tous' }
    this.defaultSorted = 'date'
    return {
      currentCity: this.defaultCity,
      currentType: this.defaultType,
      currentSorted: this.defaultSorted
    }
  },
  computed: {
    events () {
      const contents = this.$store.state.contents.all
      const events = Object.entries(contents)
        .filter(entry => entry[1].dir === 'events')
        .map(entry => entry[1])
      return events
      // Featured first
      // return events.sort(event => !event.featured)
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
      return [this.defaultCity].concat(cities)
    },
    types () {
      const types = this.events
        .map(event => event.categories)
        .flat()
        .filter((type, index, types) => types.indexOf(type) === index)
        .filter(type => type !== '')
        .map((type) => {
          return {
            name: type
          }
        })
        .sort((a, b) => a - b)
      return [this.defaultType].concat(types)
    },
    filteredEvents () {
      // if (!this.currentCity && !this.currentType) { return this.events }
      if (this.currentType === this.defaultType && this.currentCity === this.defaultCity) { return this.events }
      return this.events.filter((event) => {
        return event.address.place === this.currentCity.name ||
        event.categories.includes(this.currentType.name)
      })
    },
    eventsByCity () {
      const eventsByCity = this.events
      eventsByCity.sort((a, b) => {
        if (!a.address || !b.address) { return 0 }
        if (a.address.place < b.address.place) { return -1 }
        if (a.address.place > b.address.place) { return 1 }
        return 0
      })
      return eventsByCity.reduce((previous, current) => {
        if (!previous[current.address.place]) {
          previous[current.address.place] = {
            name: current.address.place,
            events: []
          }
        }
        previous[current.address.place].events.push(current)
        return previous
      }, {})
    },
    eventsByMonth () {
      const eventsByMonth = this.events
      eventsByMonth.sort((a, b) => {
        if (!a.booking.dates[0] || !b.booking.dates[0]) { return 0 }
        if (a.booking.dates[0] < b.booking.dates[0]) { return -1 }
        if (a.booking.dates[0] > b.booking.dates[0]) { return 1 }
        return 0
      })
      return eventsByMonth.reduce((previous, current) => {
        let currentMonth = 'Non planifié'
        if (current.booking.dates[0]) {
          const formattedDate = new Date(current.booking.dates[0].date)
            .toLocaleString('default', { year: 'numeric', month: 'long' })
          currentMonth = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
        }
        if (!previous[currentMonth]) {
          previous[currentMonth] = {
            name: currentMonth,
            events: []
          }
        }
        previous[currentMonth].events.push(current)
        return previous
      }, {})
    },
    sortedEvents () {
      switch (this.currentSorted) {
        case 'date' :
          return this.eventsByMonth
        default :
          return this.eventsByCity
      }
    }
  },
  mounted () {
    // this.sortedEvents = this.eventsByCity
  },
  methods: {
    isCurrentCity (city) { return city === this.currentCity },
    setCurrentCity (city) { this.currentCity = city },
    isCurrentType (type) { return type === this.currentType },
    setCurrentType (type) { this.currentType = type },

    setSortedBy (by) { this.currentSorted = by },
    isSortedBy (by) { return this.currentSorted === by },
    setEventsByCity () { this.sortedEvents = this.eventsByCity },
    setEventsByMonth () { this.sortedEvents = this.eventsByMonth }
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
