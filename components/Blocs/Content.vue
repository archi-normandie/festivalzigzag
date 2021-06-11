<template>
  <article v-if="content">
    <div v-html="$options.filters.markdownify(content)" />
  </article>
</template>
<script>
export default {
  name: 'BlocContent',
  props: {
    bloc: {
      type: Object,
      required: true
    }
  },
  computed: {
    content () { return this.bloc.content }
  }
}
</script>
