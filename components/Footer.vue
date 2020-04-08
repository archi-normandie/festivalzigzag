<template>
  <footer>
    <div class="wrapper">
      <nav class="block menu" v-html="navFooter.html" />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      navFooter: this.$store.state.contents.all['/blocks/nav-footer']
    }
  }
}
</script>
