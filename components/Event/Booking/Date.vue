<template>
  <div v-if="compact">
    {{ prettyDate }}
  </div>
  <div v-else>
    {{ getDay }}<br>
    <b>{{ getHour }}</b>
  </div>
</template>
<script>
export default {
  name: 'BookingDate',
  props: {
    date: {
      type: String,
      required: true
    },
    compact: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // Le format ISO doit être YYYY-MM-DDTHH:mm
    // RFC 2822 https://datatracker.ietf.org/doc/html/rfc2822#page-14
    // ou ISO8601 https://262.ecma-international.org/11.0/#sec-date.parse
    prettyDate () {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }

      const date = this.date.trim().replace(' ', 'T')
      const prettyDate = new Date(date).toLocaleDateString('fr', options).replace(':', 'h')
      return prettyDate.charAt(0).toUpperCase() + prettyDate.slice(1)
    },
    getDay () {
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      const date = this.date.trim().replace(' ', 'T')
      const day = new Date(date).toLocaleDateString('fr', options)
      return day.charAt(0).toUpperCase() + day.slice(1)
    },
    getHour () {
      const date = new Date(this.date)
      return `${date.getHours()}${String.fromCharCode(160)}h${String.fromCharCode(160)}${date.getMinutes() < 10 ? '0' : ''}${date.getMinutes()}`
    }
  }
}
</script>
