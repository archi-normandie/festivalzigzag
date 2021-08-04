<template>
  <nuxt-link
    :to="event.slug"
    class="event event-teaser"
  >
    <div class="event-title">
      {{ event.title }}
    </div>
    <EventBooking :booking="event.booking" />
    <EventAddress :address="event.address" />
    <EventCategories :categories="event.categories" />
  </nuxt-link>
</template>
<script>
import EventCategories from '~/components/Event/Categories'
import EventBooking from '~/components/Event/Booking'
import EventAddress from '~/components/Event/Address'
export default {
  name: 'EventTeaser',
  components: {
    EventCategories,
    EventBooking,
    EventAddress
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
.event-teaser {
  display: block;
  // margin: $margins;
  margin: 0;
  padding: $paddings;
  border-bottom: 1px solid transparentize($primary, 0.6);
  &.event-pinned,
  &:hover {
    background-color: $primary;
    color: $white;
    border-color: $white;
  }
  &.event {
    text-decoration: none;
    &:hover .event-title { text-decoration: underline; }
    .event {
      &-title,
      &-dates,
      &-booking,
      &-address,
      &-categories {
        text-align: left;
      }
      &-title { font-weight: $bold; }
    }
    @media (min-width: 48rem) {
      // /!\ Utiliser table pour avoir un alignement de colonnes
      // display: flex;
      display: grid;
      grid-template-columns: 30% repeat(auto-fit, minmax(0, 1fr));
      // grid-auto-columns: auto;
      grid-auto-rows: unset;
      & > * { margin-right: $margin; }
      &:last-child { margin-right: 0; }
    }
  }
}
</style>
