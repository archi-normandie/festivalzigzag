<template>
  <main>
    <Event v-if="content.dir === 'events'" :content="content" />
    <Page v-if="content.dir === 'pages'" :content="content" />
    <Story v-if="content.dir === 'stories'" :content="content" />
  </main>
</template>

<script>
import Event from '@/components/Event.vue'
import Page from '@/components/Page.vue'
import Story from '@/components/Story.vue'

export default {
  name: 'Content',
  components: {
    Event,
    Page,
    Story
  },
  validate ({ params, store }) {
    const path = '/' + params.pathMatch.replace(/\/$/, '')
    const content = store.state.contents.all[path]
    return !!content
  },
  computed: {
    content () {
      const path = '/' + this.$route.params.pathMatch.replace(/\/$/, '')
      const content = this.$store.state.contents.all[path]
      return content
    }
  },
  head () {
    const url = process.env.url + this.content.slug
    const title = this.content.title + ' | ' + process.env.mainTitle
    const description = this.content.title
    return {
      title,
      bodyAttrs: {
        class: this.content.classes || this.content.slug.split('/').pop()
      },
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:url', property: 'og:url', content: url },
        { hid: 'og:title', property: 'og:title', content: title },
        { hid: 'twitter:url', name: 'twitter:url', content: url },
        { hid: 'twitter.title', name: 'twitter:title', content: title },
        { hid: 'twitter.description', name: 'twitter:description', content: description }
      ]
    }
  }
}
</script>
