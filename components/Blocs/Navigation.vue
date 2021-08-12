<template>
  <nav v-if="navigation">
    <h3>Zigzag 2021</h3>
    <ul
      v-for="(group, index) in navigation"
      :key="index"
    >
      <li v-if="group.links.length">
        <span class="menu-label">{{ group.label }}</span>
        <ul>
          <li
            v-for="(link, linkIndex) in group.links"
            :key="linkIndex"
          >
            <a :href="link.path">{{ link.name }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'BlocNavigation',
  props: {
    bloc: {
      type: Object,
      required: true
    }
  },
  computed: {
    navigation () { return this.bloc.navigation }
  }
}
</script>
