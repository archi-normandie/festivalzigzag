<template>
  <header class="header" :class="coverMode ? 'covered' : null">
    <div class="">
      <nav class="navigation menu">
        <div class="menu-section-left">
          <div class="brand">
            <h1 class="brand-logo">
              <nuxt-link to="/">
                <HeaderLogoZigzag class="brand-logo" title="Zigzag" alt="Zigzag" />
              </nuxt-link>
            </h1>
            <p class="brand-slogan">
              Se décaler pour mieux regarder
            </p>
          </div>
        </div>
        <ul class="is-quiet menu-section-right">
          <li class="menu-item">
            <nuxt-link to="/lieux">
              Lieux
            </nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link to="/agenda">
              Agenda
            </nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link to="/pages/partenaires">
              Partenaires
            </nuxt-link>
          </li>
          <li class="menu-item">
            <nuxt-link to="/pages/a-propos">
              À propos
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import HeaderLogoZigzag from '~/static/img/header-logo-zigzag.svg?inline'
export default {
  name: 'Header',
  components: { HeaderLogoZigzag },
  props: {
    coverMode: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      navHeader: this.$store.state.contents.all['/blocks/nav-header']
    }
  }
}
</script>

<style lang="scss">
.header {
  padding: $paddings-large;
  padding-top: 1.2rem;
  color: $brand-color;
  fill: $brand-color;
  // color: $brand-color;
  // fill: $brand-color;
  // image d'entête
  &:not(.covered) {
    color: $brand-color-invert;
    fill: $brand-color-invert;
    background-color: $brand-color;
    background-image: url("/img/bande-biseau-top.svg"), url("/img/bande.svg");
    background-repeat: no-repeat, repeat-y;
    background-position: top left, top left;
    .brand {
      margin-left: 2rem;
      margin-top: 2rem;
      &-logo {
        color: $brand-color-invert;
      }
    }
  }

  .brand {
    &-logo {
      margin: 0;
      color: $brand-color;
      a {
        color: inherit;
        display: block;
        text-decoration: none;
        border-bottom: none;
        svg { display: block; }
      }
    }
    &-slogan {
      margin-left: 6.2rem;
      margin-bottom: 0;
      font-size: $fs14;
      text-transform: uppercase;
    }
  }
}
</style>
