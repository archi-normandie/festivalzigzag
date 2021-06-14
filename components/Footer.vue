<template>
  <footer class="footer">
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
  </footer>
</template>

<script>
import settings from '~/static/configuration/settings.json'
import BlocContent from '~/components/Blocs/Content'
import BlocNavigation from '~/components/Blocs/Navigation'
export default {
  name: 'Footer',
  components: { BlocContent, BlocNavigation },
  computed: {
    footerSettings () { return settings.footer },
    blocs () { return this.footerSettings.blocs }
  }
}
</script>

<style lang="scss">
@import '~/assets/scss/_variables.scss';
.footer {
  padding: 3rem 1.5rem 6rem;
  h1,
  h2,
  h3 { color: $white; }
}
@media (min-width: 30rem) {
  // Limiter la largeur de bloc à 1/3
  .footer .menu-item {
    max-width: 33.334%;
  }
}
</style>
