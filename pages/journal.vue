<template>
  <main ref="main">
    <div class="wrapper">
      <h1 class="title-main">
        Journal
      </h1>
      <div class="content-main">
        <StoryTeaser
          v-for="content in pageContents"
          :key="content.slug"
          :content="content"
        />
        <paginate
          v-if="pageCount > 1"
          :page-count="pageCount"
          :click-handler="pageFlip"
          :no-li-surround="true"
          container-class="pager"
          prev-text="&laquo; Précédent"
          next-text="Suivant &raquo;"
        />
      </div>
    </div>
  </main>
</template>

<script>
import Paginate from 'vuejs-paginate/src/components/Paginate.vue'
import StoryTeaser from '@/components/StoryTeaser.vue'

export default {
  name: 'Journal',
  components: {
    Paginate,
    StoryTeaser
  },
  data () {
    return {
      paginateLimit: 5,
      paginateOffset: 0
    }
  },
  computed: {
    contents () {
      const contents = Object.entries(this.$store.state.contents.all)
        .filter(entry => entry[1].dir === 'stories')
        .map(entry => entry[1])
      contents.sort(function (a, b) {
        return b.dates[0].start.timestamp - a.dates[0].start.timestamp
      })
      return contents
    },
    pageContents () {
      const begin = this.paginateOffset * this.paginateLimit
      const end = begin + this.paginateLimit
      return this.contents.slice(begin, end)
    },
    pageCount () {
      return Math.ceil(this.contents.length / this.paginateLimit)
    }
  },
  methods: {
    pageFlip (page) {
      this.paginateOffset = page - 1
      this.$refs.main.scrollIntoView()
    }
  },
  head () {
    const url = process.env.url + '/journal'
    const title = 'Journal | ' + process.env.mainTitle
    const description = 'Journal du festival Zigzag'
    return {
      title,
      bodyAttrs: {
        class: 'stories'
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
