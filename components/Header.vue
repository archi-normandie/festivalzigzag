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
            <nuxt-link to="/journal">
              Journal
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
  padding: $margin/2;
  background-color: $primary;
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
}
.home .header {
  padding-top: 6vh;
  padding-left: 6vh;
  padding-right: 6vh;
  background-color: transparent;
  color: $white;
  .brand-logo { fill: $white; }
  .menu-item a {
    color: $white;
    border-bottom-color: $white;
  }
}

</style>
