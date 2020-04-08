<template>
  <div class="body">
    <Header />
    <nuxt />
    <Footer />
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
  }
}
</script>
