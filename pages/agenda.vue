<template>
  <main>
    <div class="wrapper">
      <h1 class="title-main">
        Agenda
      </h1>
      <div class="content-main--header">
        <div
          :class="blockAgendaHeader.classes"
          v-html="blockAgendaHeader.html"
        />
      </div>
      <div class="content-main">
        <EventTeaser
          v-for="event in featuredEvents"
          :key="event.slug"
          :event="event"
          class="event-pinned"
        />
        <EventTeaser
          v-for="event in regularEvents"
          :key="event.slug"
          :event="event"
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
  computed: {
    events () {
      const contents = this.$store.state.contents.all
      const events = Object.entries(contents)
        .filter(entry => entry[1].dir === 'events')
        .map(entry => entry[1])
      return events
    },
    regularEvents () {
      return this.events
        .filter(event => !event.featured)
        .sort((a, b) => a.dates[0].start.timestamp - b.dates[0].start.timestamp)
    },
    featuredEvents () {
      return this.events.filter(event => event.featured)
    },
    blockAgendaHeader () {
      return this.$store.state.contents.all['agenda-header']
    }
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
