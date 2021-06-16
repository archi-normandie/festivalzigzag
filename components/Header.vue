<template>
  <header>
    <div class="wrapper">
      <nav class="block menu">
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
// Site title.
.brand { }
.brand-logo {
  margin: 0;
  a {
    display: block;
    text-decoration: none;
    border-bottom: none;
    svg { display: block; }
  }
}
.brand-slogan {
  // font-size: 1rem;
  margin-left: 6.2rem;
  color: $white;
  margin-bottom: 0;
}

.title-site {
  margin: 0;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
  }
}

.title-site--img,
.title-site--txt {
  display: block;
  height: 60px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 50% 50%;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;
}

.title-site--img {
  width: 80px;
  margin-right: $margin;
  background-image: url("/img/header-logo.svg");
}

.title-site--txt {
  width: 100px;
  background-image: url("/img/header-title.svg");
}

.title-site--slogan {
  // Screen reader (mobile)
  position: absolute;
  top: -9999px;
  left: -9999px;
  // display: none;

  margin: 0 0 0 6.2rem;
  color: $white;
  font-size: $fs16;
  font-style: italic;
  text-transform: none;
}
.title-site--slogan {
  position: static;
}
</style>
