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
        <nuxt-link
          v-for="event in pinnedEvents"
          :key="event.slug"
          :to="event.slug"
          class="event event-teaser event-pinned"
        >
          <p class="event--dates">
            {{ event.countinuousdate }}
          </p>
          <p class="event--address">
            {{ event.address }}
          </p>
          <p class="event--category">
            <span>
              {{ event.category[0] }}
            </span>
            <span v-if="event.message" class="messages error">
              {{ event.message }}
            </span>
          </p>
          <p class="event--title">
            {{ event.title }}
          </p>
        </nuxt-link>
        <nuxt-link
          v-for="event in regularEvents"
          :key="event.slug"
          :to="event.slug"
          class="event event-teaser"
        >
          <ul class="event--dates">
            <li v-for="date in event.dates" :key="date.render">
              {{ date.render }}
            </li>
          </ul>
          <p class="event--address">
            {{ event.address }}
          </p>
          <p class="event--category">
            <span>
              {{ event.category[0] }}
            </span>
            <span v-if="event.message" class="messages error">
              {{ event.message }}
            </span>
          </p>
          <p class="event--title">
            {{ event.title }}
          </p>
        </nuxt-link>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Agenda',
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
        .filter(entry => typeof entry.dates[0] !== 'undefined')
        .sort((a, b) => a.dates[0].start.timestamp - b.dates[0].start.timestamp)
    },
    pinnedEvents () {
      return this.events.filter(entry => typeof entry.dates[0] === 'undefined')
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
<style scoped lang="scss">
@import 'assets/scss/app.scss';
.event-teaser.event-pinned {
  @extend .event-teaser:hover
}
</style>
