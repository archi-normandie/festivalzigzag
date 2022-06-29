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
  display: inline-block;
  margin: $margins-small;
  padding-bottom: calc($line-height / 2);
  border-bottom: 1px solid;
  text-transform: uppercase;
  }
</style>
