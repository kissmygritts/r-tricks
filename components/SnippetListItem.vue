<template>
  <li
    class="py-1 text-xl text-gray-800 leading-tight border border-transparent hover:bg-gray-200"
  >
    <nuxt-link :to="snippet.route" class="flex items-center justify-between">
      <span>{{ snippet.attributes.title }}</span>
      <span class="px-3 py-1 text-sm text-green-800 rounded bg-green-200">
        {{ snippet.attributes.experience }}
      </span>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  name: 'SnippetListItem',
  props: {
    snippet: {
      default: () => {},
      type: Object
    }
  }
}
</script>
