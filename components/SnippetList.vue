<template>
  <div>
    <div v-for="(collection, i) in collections" :key="i">
      <h2
        class="text-3xl text-blue-600 uppercase tracking-wide font-light border-blue-600 border-dashed border-b-2"
      >
        {{ collection.collection }}
      </h2>

      <ul class="mt-2 mb-8">
        <snippet-list-item
          v-for="(snippet, j) in collection.snippets"
          :key="j"
          :snippet="snippet"
        />

        <!-- <li v-for="(snippet, j) in collection.snippets" :key="j">
          <nuxt-link :to="snippet.route">
            <span>{{ snippet.attributes.title }}</span>
            <span>{{ snippet.attributes.experience }}</span>
          </nuxt-link>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import SnippetListItem from '~/components/SnippetListItem.vue'

export default {
  name: 'SnippetList',
  components: {
    SnippetListItem
  },
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

<style scoped>
/* h2 {
  border-bottom: 2px solid;
  border-bottom-width: 2px;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    40deg,
    rgba(43, 108, 176, 0.8) 0%,
    rgba(255, 255, 255, 0) 50%
  ); 
} */
</style>
