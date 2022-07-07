<template>
  <div v-if="compact">
    {{ prettyDate }}
  </div>
  <div v-else>
    {{ date.date | getDay }}<br>
    <b>{{ date.date | getHour }}</b>
  </div>
</template>
<script>
export default {
  name: 'BookingDate',
  props: {
    date: {
      type: Object,
      required: true
    },
    compact: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    prettyDate () {
      return this.$options.filters.prettyDate(this.date.date)
    },
    getDay () {
      return this.$options.filters.getDay(this.date.date)
    },
    getHour () {
      return this.$options.filters.getHour(this.date.date)
    }
  }
}
</script>
