<template>
  <div class="event-booking">
    <p v-if="booking.period">
      {{ booking.period }}
    </p>
    <ul v-else class="event-booking-dates">
      <li
        v-for="(date, index) in booking.dates"
        :key="index"
      >
        {{ date.date | prettyDate }}
      </li>
    </ul>
    <div
      v-if="booking.state"
      class="event-booking-state"
    >
      <p class="messages error">
        {{ booking.state }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'EventBooking',
  props: {
    booking: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="scss">
.event.is-featured .messages.error {
  color: white;
  background-color: red;
}
.event-booking {
  text-align: center;
  font-weight: 700;
  &-dates {
    list-style: none;
    margin: 0;
  }
}

</style>
