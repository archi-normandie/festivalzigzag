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
body { min-height: 100vh; }
.home {
  & .body {
   min-height: 41rem;
   height: calc(100vh - 3rem);
  }
  &::before {
    content: " ";
    display: block;
    min-height: 41rem;
    height: calc(100vh - 3rem);
    background-image:
    linear-gradient(0deg, rgba(5,107,135,1) 0%, rgba(255,255,255,1) 50%, rgba(5,107,135,1) 100%);
    mix-blend-mode: multiply;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 1.5rem;
    z-index: -1;
  }
  & .header,
  & .footer {
    background-color: transparent;
    color: $white;
    .brand-logo { fill: $white; }
    .menu-item a {
      color: $white;
      border-bottom-color: $white;
    }
    &::before {
      content: "";
      background-color: transparent;
      mix-blend-mode: normal;
    }
  }
  & .footer {
    position: relative;
    width: 100%;
    padding-top: 0;
    padding-bottom: 0;
    & .subfooter {
      position: absolute;
      right: 1.5rem;
      bottom: 1.5rem;
      left: 1.5rem;
    }
  }
 }
</style>
