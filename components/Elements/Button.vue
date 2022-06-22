<template>
  <a
    v-if="to"
    :href="to"
  >
    <slot>
      Link
    </slot>
  </a>
  <button
    v-else
    class="button"
  >
    <slot>
      Button
    </slot>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    to: {
      type: String,
      default: null
    }
  }
}
</script>
<style  lang="scss">
.button {
  display: inline-block;
  padding: $paddings;
  background-color: $brand-color-invert;
  color: $brand-color;
  border: $border;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: normal;
  cursor: pointer;
  &:focus,
  &:hover,
  &.is-current {
    color: $brand-color-invert;
    background-color: $brand-color;
  }
  &.is-large { font-size: $fs20; }
  &.is-small { font-size: $fs14; }
  &.is-primary {
    color: $primary;
    background-color: $primary-invert;
    &.is-outlined {
      color: $brand-color;
      border-color: $brand-color;
      background-color: $brand-color-invert;
      &:focus,
      &:hover,
      &.is-current {
        color: $brand-color-invert;
        background-color: $brand-color;
      }
    }
    &:focus,
    &:hover,
    &.is-current {
      color: $primary-invert;
      background-color: $primary;
    }
  }
  &.is-outlined {
    color: $brand-color;
    border-color: $brand-color;
    background-color: $brand-color-invert;
    &:focus,
    &:hover,
    &.is-current {
      color: $brand-color-invert;
      background-color: $brand-color;
    }
  }
}
</style>
