<template>
  <nuxt-link
    :to="event.slug"
    class="event event-teaser"
  >
    <p class="event--dates">
      <template v-if="event.booking.period">
        {{ event.booking.period }}
      </template>
      <ul v-else>
        <li
          v-for="(date, index) in event.booking.dates"
          :key="index"
        >
          {{ date.date | prettyDate }}
        </li>
      </ul>
      <span
        v-if="event.booking.state"
        class="messages error"
        :class="event.featured ? 'is-reversed' : null"
      >
        {{ event.booking.state }}
      </span>
    </p>
    <p class="event--address">
      {{ event.address.place }}
    </p>
    <p class="event--category">
      <span
        v-for="(category, index) in event.informations.categories"
        :key="index"
      >
        {{ category }}
      </span>
    </p>
    <p class="event--title">
      {{ event.title }}
    </p>
  </nuxt-link>
</template>
<script>

export default {
  name: 'EventTeaser',
  props: {
    event: {
      type: Object,
      required: true
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
