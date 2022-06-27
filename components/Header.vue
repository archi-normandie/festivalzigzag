<template>
  <header class="header">
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
  data () {
    return {
      navHeader: this.$store.state.contents.all['/blocks/nav-header']
    }
  }
}
</script>

<style lang="scss">
.header {
  position: relative;
  padding: $paddings-large;
  padding-top: 1.2rem;
  background-color: $brand-color;
  mix-blend-mode: multiply;
  color: $brand-color-invert;
  fill: $brand-color-invert;

  // Sauf sur la page d'accueil
  &::after {
    content:" ";
    position: absolute;
    inset: 0;
    padding-bottom: 12rem;
    // opacity: .2;
    z-index: - 1;
    background-color: $brand-color;
    background:
      url("/img/bande-biseau-top.svg"),
      url("/img/bande.svg"),
      linear-gradient(0deg, transparent 0%, $brand-color 70%),
      url("/img/background-top.jpg")
    ;
    background-size: auto, auto, cover;
    background-repeat: no-repeat, repeat-y, no-repeat;
    background-position: top left, top left, bottom, bottom;
    // background-blend-mode: multiply;
    // mix-blend-mode: multiply;
  }

  .brand {
    margin-left: 1.5rem;
    margin-top: 1.5rem;
    &-logo {
      margin: 0;
      a {
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
