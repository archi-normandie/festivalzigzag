<template>
  <div class="event-booking">
    <p v-if="booking.period" class="event-booking-dates">
      {{ booking.period }}
    </p>
    <template v-else>
      <ul v-if="booking.dates.length" class="event-booking-dates">
        <li
          v-for="(date, index) in booking.dates"
          :key="index"
        >
          {{ date.date | prettyDate }}
        </li>
      </ul>
    </template>
    <div
      v-if="booking.state"
      class="event-booking-state"
    >
      <p class="messages error">
        {{ booking.state }}
      </p>
    </div>
    <p v-if="booking.link">
      <Button
        :href="booking.link"
        class="button is-primary is-outlined is-small"
      >
        Réserver
      </Button>
    </p>
  </div>
</template>
<script>
import Button from '~/components/Elements/Button'
export default {
  name: 'EventBooking',
  components: { Button },
  props: {
    booking: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.event-booking {
  text-align: center;
  font-weight: 700;
  &-dates {
    list-style: none;
    margin: $margins-small;
  }
}

</style>
