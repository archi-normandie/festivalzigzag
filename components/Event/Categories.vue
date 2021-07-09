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
  margin: 0;
  text-transform : uppercase;
  text-align: center;
  & li { display: inline; }
  & li:not(:last-child)::after { content: ', '; }
}
</style>
