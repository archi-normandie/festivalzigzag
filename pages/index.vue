<template>
  <main>
    <nuxt-link to="/lieux" class="hero-logo">
      <span class="sr">
        Zigzag — Festival d'architecture et des arts de l'espace, du 1er au 16 octobre 2022
      </span>
    </nuxt-link>
  </main>
</template>

<script>
export default {
  name: 'Journal',
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
  // overflow: hidden;
  .hero-logo-svg {
    display: inline-block;
    // height: 60vh;
    width: 53rem;
  }
  .filter-multiply {
    mix-blend-mode: multiply;
  }
}
</style>
