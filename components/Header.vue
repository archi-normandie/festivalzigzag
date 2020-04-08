<template>
  <header>
    <div class="wrapper">
      <h1 class="title-site">
        <nuxt-link to="/">
          <span class="title-site--img" />
          <span class="title-site--txt">Zigzag</span>
        </nuxt-link>
        <p class="title-site--slogan">
          Le long de la Vallée de la Seine
        </p>
      </h1>
      <nav class="block menu" v-html="navHeader.html" />
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      navHeader: this.$store.state.contents.all['/blocks/nav-header']
    }
  }
}
</script>
