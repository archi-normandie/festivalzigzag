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

  // Solution possible : utiliser plusieurs svg de fond. un avec un filtre
  // multiply, l'autre en premier plan sans filtre. Conserver les même
  // dimensions de viewort pour faciliter le calage.
  // mix-blend-mode: multiply;

  // Ne fonctionne que sur les SVG incorporée.
  // .filter-multiply {
  //   fill: blue;
    // mix-blend-mode: multiply;
    // opacity: 0.6;
  // }
}
</style>
