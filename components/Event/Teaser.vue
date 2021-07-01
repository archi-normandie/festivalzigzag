<template>
  <nuxt-link
    :to="event.slug"
    class="event event-teaser"
  >
    <p class="event--title">
      {{ event.title }}
    </p>
    <EventBooking :booking="event.booking" />
    <p class="event--address">
      {{ event.address.place }}
    </p>
    <EventCategories :categories="event.categories" />
  </nuxt-link>
</template>
<script>
import EventCategories from '~/components/Event/Categories'
import EventBooking from '~/components/Event/Booking'
export default {
  name: 'EventTeaser',
  components: {
    EventCategories,
    EventBooking
  },
  props: {
    event: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
// @import 'assets/scss/app.scss';
// .event-teaser.event-pinned {
//   @extend .event-teaser:hover
// }
</style>
