<template>
  <main>
    <nuxt-link to="/lieux" class="hero-logo">
      <Label class="hero-logo-svg" alt="Zigzag, Festival d'architecture et des arts de l'espace" title="Zigzag — Festival d'architecture et des arts de l'espace, du 1er au 16 octobre 2022"/>
    </nuxt-link>
  </main>
</template>

<script>
import Label from '~/static/files/home-label.svg?inline'
export default {
  name: 'Journal',
  components: { Label },
  head () {
    const url = process.env.url
    const title = process.env.mainTitle
    const description = process.env.mainDesc
    return {
      title,
      bodyAttrs: {
        class: 'home'
      },
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:url', name: 'twitter:url', content: url },
        { hid: 'twitter.title', name: 'twitter:title', content: title },
        { hid: 'twitter.description', name: 'twitter:description', content: description }
      ]
    }
  }
}
</script>
<style lang="scss" >
.hero-logo {
  color: $brand-color-secondary;
  display: block;
  overflow: hidden;
  text-align: center;
  .hero-logo-svg {
    display: inline-block;
    height: 60vh;
  }
}
</style>
