<template>
  <div
    v-if="address"
    class="event-address"
  >
    <p>{{ address.place }}</p>
  </div>
</template>
<script>
export default {
  name: 'EventAddress',
  props: {
    address: {
      type: Object,
      default: null
    }
  }
}
</script>
<style lang="scss">
.event-address {
  text-align: center;
  text-transform: uppercase;
  font-weight: $bold;
  }
</style>
