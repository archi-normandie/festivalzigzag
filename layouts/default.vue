<template>
  <div class="body">
    <Header :coverMode="isHome" />
    <nuxt class="container"/>
    <Footer :coverMode="isHome" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Layout',
  components: {
    Footer,
    Header
  },
  computed: {
    isHome () { return this.$route.name === 'index' }
  }
}
</script>
<style lang="scss">
body {
  // padding: 1.5rem;
  // background-image: url("/img/background-top.jpg"), url("/img/background-bottom.jpg");
  // background-color: $white;
  // background-repeat: no-repeat, no-repeat;
  // background-position: top, bottom;
  // background-size: contain;
}
// main { background-color: rgba(255, 255, 255, 0.6); }
.container { padding: $paddings; }
</style>
