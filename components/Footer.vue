<template>
  <footer>
    <section v-if="!isHome" class="footer">
      <!-- Prévoir un sous pied de page pour l'Ours. -->
      <div class="wrapper">
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
      </div>
    </section>
    <section class="subfooter">
      <ul class="is-inline-fancy">
        <li>Mentions légales</li>
        <li>© Maison de l'architecture de Normandie — le Forum ({{ currentYear }}/{{ nextYear }})</li>
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
@import '~/assets/scss/_variables.scss';
.footer,
.subfooter {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: $white;
    font-size: 1em;
  }
}
.footer {
  font-size: 1em;
  padding: 3rem 1.5rem 6rem;
}
.subfooter {
  font-size: 0.8em;
  padding: 1.5rem;
  background-color: transparentize(darken($primary, 10), 0.4);
}
.home .subfooter {
  padding-bottom: 6vh;
  padding-left: 6vh;
  background-color: transparent;
  color: $white;
}
.subfooter :last-child { margin-bottom: 0; }
@media (min-width: 30rem) {
  // Limiter la largeur de bloc à 1/3
  .footer .menu-item {
    width: 33.334%;
  }
}
</style>
