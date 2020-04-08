<template>
  <article class="story story-teaser">
    <div class="image">
      <img
        v-if="content.image"
        :alt="content.title"
        :src="`/files/derivatives/story/${imageName}`"
      >
    </div>
    <div class="content">
      <h1>
        <nuxt-link :to="content.slug">
          {{ content.title }}
        </nuxt-link>
      </h1>
      <p class="date">
        Publié le <time>{{ content.dates[0].start.short }}</time>.
      </p>
      <p>
        <nuxt-link :to="content.slug">
          Lire l'article
        </nuxt-link>
      </p>
    </div>
  </article>
</template>

<script>
import path from 'path'

export default {
  name: 'StoryTeaser',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageName () {
      return path.basename(this.content.image)
    }
  }
}
</script>
