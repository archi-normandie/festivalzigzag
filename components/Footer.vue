<template>
  <footer class="footer">
    <section v-if="!isHome">
      <div class="menu has-text-top">
        <template v-if="blocs.length">
          <component
            :is="bloc.template"
            v-for="(bloc, index) in blocs"
            :key="index"
            :bloc="bloc"
            class="menu-item"
          />
        </template>
      </div>
    </section>
    <section class="subfooter">
      <ul class="subfooter-left is-inline-fancy">
        <li><nuxt-link to="pages/mentions-legales">Mentions légales</nuxt-link></li>
        <li>© Maison de l'architecture de Normandie — le Forum ({{ currentYear }}/{{ nextYear }})</li>
        <li>Identité graphique : <a href="https://sarahkugel.com/">Sarah Kügel</a></li>
        <li>Conception Web : <a href="https://github.com/ziopod">Ziopod</a></li>
      </ul>
      <ul class="subfooter-rigth is-inline-fancy is-align-right">
        <li><a href="https://www.facebook.com/zigzagfestivalarchitecture">Facebook</a></li>
        <li><a href="https://www.instagram.com/festival_zigzag/">Instagram</a></li>
      </ul>
    </section>
  </footer>
</template>

<script>
import BlocContent from '~/components/Blocs/Content'
import BlocNavigation from '~/components/Blocs/Navigation'
export default {
  name: 'Footer',
  components: { BlocContent, BlocNavigation },
  computed: {
    footerSettings () { return require('~/static/settings/footer.json') },
    blocs () { return this.footerSettings.blocs },
    isHome () { return this.$route.name === 'index' },
    currentYear () { return new Date().getFullYear() },
    nextYear () { return this.currentYear + 1 }
  }
}
</script>
<style lang="scss">
.footer,
subfooter {
  background-color: $brand-color;
  color: $brand-color-invert;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1em;
    margin-bottom: 1rem;
  }

  a {
    color: $white;
    text-decoration: underline;

    &:focus,
    &:hover {
      color: $brand-color-secondary;
      text-decoration: underline;
    }

    &:active {
      color: $tertiary;
    }
  }
}

.footer {
  position: relative;
  font-size: $fs14;
  color: $white;
  padding: $paddings-large;
}
.subfooter {
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  font-size: $fs12;
  &-left { justify-content: flex-start; }
  &-right { justify-content: flex-end; }
}

</style>
<style lang="scss">

.footer,
.subfooter {

}

// .subfooter :last-child { margin-bottom: 0; }
@media (min-width: 48rem) {
  // Limiter la largeur de bloc à 1/3
  .footer .menu-item {
    width: 33.334%;
  }
}
</style>
