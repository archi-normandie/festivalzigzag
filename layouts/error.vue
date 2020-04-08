<template>
  <main>
    <div class="wrapper">
      <h1 class="title-main">{{ h1 }}</h1>
      <p>
        <nuxt-link to="/agenda">
          Retour à l'agenda
        </nuxt-link>
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Error',
  layout: 'error',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    h1 () {
      return this.error.statusCode === 404
        ? 'Page non trouvée'
        : 'Erreur inconnue'
    }
  }
}
</script>
