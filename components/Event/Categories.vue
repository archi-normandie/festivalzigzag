<template>
  <ul class="event-categories">
    <li
      v-for="(category, index) in categories"
      :key="index"
    >{{ category }}</li>
  </ul>
</template>
<script>
export default {
  name: 'EventCategories',
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss">
.event-categories {
  list-style: none;
  margin: $margins-small;
  text-transform : uppercase;
  & li { display: inline; }
  & li:not(:last-child)::after { content: ', '; }
}
</style>
