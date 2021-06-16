<template>
  <main>
    <nuxt-link to="/lieux">
      <img class="hero-logo" src="/files/home-label.svg" alt="Zigzag 26 septembre - 10 octobre 2021" title="Zigzag — festival d'architecture et des arts de l'espace — du 26 septembre au 10 octobre 2021">
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
<style lang="scss">
 .home::before {
   content: " ";
   min-height: 33rem;
   background-image:
    linear-gradient(0deg, rgba(5,107,135,1) 0%, rgba(255,255,255,1) 50%, rgba(5,107,135,1) 100%);
   mix-blend-mode: multiply;
   position: absolute;
   top: 6.875rem;
  //  top: 0rem;
   right: 6.875rem;
  //  right: 0rem;
  //  bottom: 0;
   bottom: 6.875rem; // => 62px;
   left: 6.875rem;
  //  left: 0rem;
   z-index: -1;
 }
</style>
