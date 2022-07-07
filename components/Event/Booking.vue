<template>
  <div class="event-booking">
    <p v-if="booking.period" class="event-booking-dates">
      {{ booking.period }}
    </p>
    <template v-else>
      <template v-if="booking.dates.length">
        <ul class="event-booking-dates">
          <li
            v-for="(date, index) in booking.dates"
            :key="index"
          >
            <BookingDate :date="date" :compact="compactMode" />
          </li>
        </ul>
      </template>
    </template>
    <div
      v-if="booking.state"
      class="event-booking-state"
    >
      <p class="messages error">
        {{ booking.state }}
      </p>
    </div>
    <p v-if="booking.link && !compactMode ">
      <Button
        :to="booking.link"
        class="button is-primary is-outlined is-small"
      >
        Réserver
      </Button>
    </p>
  </div>
</template>
<script>
import BookingDate from '~/components/Event/Booking/Date'
import Button from '~/components/Elements/Button'
export default {
  name: 'EventBooking',
  components: { BookingDate, Button },
  props: {
    booking: {
      type: Object,
      required: true
    },
    compactMode: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
.event-booking {
  font-weight: 700;
  &-dates {
    list-style: none;
    margin: $margins-small;
    line-height: calc($line-height * 1.2);
    b {
      background: $text-color;
      color: $text-color-invert;
      padding: $paddings-small;
    }
  }
  .button {
    margin-bottom: $margin;
  }
}

</style>
