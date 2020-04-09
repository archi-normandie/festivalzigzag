<template>
  <header>
    <div class="wrapper">
      <h1 class="title-site">
        <nuxt-link to="/">
          <span class="title-site--img" />
          <span class="title-site--txt">Zigzag</span>
        </nuxt-link>
        <p class="title-site--slogan">
          Le long de la Vallée de la Seine
        </p>
      </h1>
      <nav class="block menu">
        <ul>
          <li>
            <nuxt-link to="/lieux">Lieux</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/agenda">Agenda</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/journal">Journal</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/pages/a-propos">À propos</nuxt-link>
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
