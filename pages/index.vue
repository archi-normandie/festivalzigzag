<template>
  <main>
    <nuxt-link to="/lieux" class="hero-logo">
      <span class="sr">
        Zigzag — Festival d'architecture et des arts de l'espace, du 1er au 16 octobre 2022
      </span>
      <div class="home-summary level">
        <div class="left">
          <h1>
            1<sup>er</sup> › 16 octobre 2022
          </h1>
          <p class="sub-header">
            Le long de la vallée de la seine
          </p>
        </div>
        <div class="right level">
          <ul class="left">
            <li>Déambulations</li>
            <li>Installations</li>
            <li>Parcours</li>
          </ul>
          <ul class="right">
            <li>Randonnées</li>
            <li>Tablées</li>
            <li>Visites</li>
          </ul>
        </div>
      </div>
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
  min-height: 60vh;
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

.level {
  display: inline-flex;
  justify-content: space-between;
  margin-left: 0;
  .left {
    justify-content: flex-start;
    text-align: left;
  }
  .right {
    justify-content: flex-end;
    text-align: right;
  }
}

.home-summary {
  position: absolute;
  right: $line-height;
  bottom: calc($line-height * 3);
  padding: $paddings-large;
  background: $brand-color-secondary;
  color: $brand-color-secondary-invert;
  text-transform: uppercase;

  h1 {
    color: inherit;
    font-size: $fs24;
    margin-top: 0;
    margin-bottom: .2rem;;
  }
  .sub-header { font-size: $fs18; }
  .level {
    font-size: $fs14;
    ul {
      list-style: none;
      li:note(:last-child) {
        margin-bottom: calc($line-height / 3);
        padding-bottom: calc($line-height / 3);
        border-bottom: 1px solid;
      }
    }
  }
}
</style>
