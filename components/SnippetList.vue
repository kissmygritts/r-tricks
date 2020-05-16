<template>
  <div>
    <div v-for="(collection, i) in collections" :key="i">
      <h2 class="text-2xl">
        {{ collection.collection }}
      </h2>

      <ul>
        <li v-for="(snippet, j) in collection.snippets" :key="j">
          <nuxt-link :to="snippet.route">
            <span>{{ snippet.attributes.title }}</span>
            <span>{{ snippet.attributes.experience }}</span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnippetList',
  props: {
    snippets: {
      default: () => [],
      type: Array
    }
  },
  computed: {
    collections() {
      const categories = [
        ...new Set(this.snippets.map((s) => s.attributes.collection))
      ]
      const collections = categories.map((c) => {
        const collection = this.snippets.filter(
          (f) => f.attributes.collection === c
        )
        return {
          collection: c,
          numSnippets: collection.length,
          snippets: collection
        }
      })

      return collections
    }
  }
}
</script>
