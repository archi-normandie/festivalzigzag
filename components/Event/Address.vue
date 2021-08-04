<template>
  <p
    v-if="address"
    class="event-address"
  >
    {{ address.place }}
  </p>
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
