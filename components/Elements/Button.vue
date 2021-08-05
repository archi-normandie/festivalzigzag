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
  background-color: $text-color-invert;
  color: $text-color;
  border: $border;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: normal;
  cursor: pointer;
  &:focus,
  &:hover,
  &.is-current {
    color: $text-color-invert;
    background-color: $text-color;
  }
  &.is-large { font-size: $fs20; }
  &.is-small { font-size: $fs14; }
  &.is-primary {
    color: $primary;
    background-color: $primary-invert;
    &.is-outlined {
      color: $text-color;
      border-color: $text-color;
      background-color: $text-color-invert;
      &:focus,
      &:hover,
      &.is-current {
        color: $text-color-invert;
        background-color: $text-color;
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
    color: $text-color;
    border-color: $text-color;
    background-color: $text-color-invert;
    &:focus,
    &:hover,
    &.is-current {
      color: $text-color-invert;
      background-color: $text-color;
    }
  }
}
</style>
