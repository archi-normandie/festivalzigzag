<template>
  <div class="wrapper">
    <h1 class="title-main">
      {{ content.title }}
    </h1>
    <div class="content-main">
      <article class="story story-full">
        <p class="date">
          Publié le <time>{{ content.dates[0].start.short }}</time>
        </p>
        <img v-if="content.image" :alt="content.title" :src="content.image">
        <div v-html="content.html" />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Story',
  props: {
    content: {
      type: Object,
      required: true
    }
  }
}
</script>
