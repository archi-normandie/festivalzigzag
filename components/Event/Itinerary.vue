<template>
  <section
    class="event-itinerary"
    v-if="events"
  >
    <h2>Itinéraire Zigzag proposé</h2>
    <ul>
      <li
        v-for="(event, index) in events"
        :key="index"
      >
        <nuxt-link :to="event.link" >
          {{ event.label }}
        </nuxt-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: 'EventItinerary',
  props: {
    itinerary: {
      type: Array,
      default: null
    }
  },
  computed: {
    events () {
      if (this.itinerary.length === 0) { return null }
      const events = this.itinerary.map((l) => {
        return {
          ...l,
          link: l.event.substring('static'.length, l.event.length - '.md'.length)
        }
      })
      return events || null
    }
  }
}
</script>
<style scoped lang="scss">
.event-itinerary h2 {
  font-size: $fs16;
}
</style>
