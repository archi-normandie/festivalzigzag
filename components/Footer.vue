<template>
  <footer>
    <div class="wrapper">
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
          <li>
            <nuxt-link to="/pages/presse">Presse</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/pages/partenaires">Partenaires</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/pages/mentions-legales">Mentions légales</nuxt-link>
          </li>
          <li>
            <a href="https://www.facebook.com/zigzagfestivalarchitecture/" target="_blank">Facebook</a>
          </li>
          <li>
            <a href="https://www.instagram.com/festival_zigzag/" target="_blank">Instagram</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      navFooter: this.$store.state.contents.all['/blocks/nav-footer']
    }
  }
}
</script>
