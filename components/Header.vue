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
              <em>Le long de la Vallée de la Seine</em>
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
  background-color: transparent;
  color: $white;
  fill: $white;
  .brand {
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
    }
  }
  &::before{
    content: " ";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    // background-image: linear-gradient(180deg, #056B87 0%, transparent 100%);
    background-color: $primary;
    z-index: -1;
    mix-blend-mode: multiply;
  }
}
</style>
