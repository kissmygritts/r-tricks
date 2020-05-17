<template>
  <li
    class="py-1 text-lg md:text-xl text-gray-700 leading-tight border border-transparent hover:bg-gray-200"
  >
    <nuxt-link :to="snippet.route" class="flex items-center justify-between">
      <span>{{ snippet.attributes.title }}</span>
      <level-tag :level="snippet.attributes.experience" />
    </nuxt-link>
  </li>
</template>

<script>
import LevelTag from '@/components/LevelTag.vue'
export default {
  name: 'SnippetListItem',
  components: {
    LevelTag
  },
  props: {
    snippet: {
      default: () => {},
      type: Object
    }
  }
}
</script>
