<template>
  <header>
    <div class="wrapper">
      <nav class="block menu">
        <h1 class="title-site menu-section-left">
          <nuxt-link to="/">
            <span class="title-site--img" />
            <span class="title-site--txt">Zigzag</span>
          </nuxt-link>
          <p class="title-site--slogan">
            Le long de la Vallée de la Seine
          </p>
        </h1>
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
export default {
  name: 'Header',
  data () {
    return {
      navHeader: this.$store.state.contents.all['/blocks/nav-header']
    }
  }
}
</script>
