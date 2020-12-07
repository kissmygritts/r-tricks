<template>
  <div>
    <hero-section />

    <!-- topics section -->
    <div
      class="w-11/12 lg:w-2/3 rounded bg-gray-100 mx-auto px-12 py-8 -mt-16 relative z-10"
    >
      <div class="flex">
        <div
          v-for="topic in topics"
          :key="topic"
          class="bg-indigo-600 rounded flex items-center m-2 p-2"
        >
          <span class="text-white">
            {{ topic.category }}
          </span>
          <span class="bg-indigo-200 text-indigo-700 p-1 ml-2">
            {{ topic.count }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroSection from '@/components/hero-section.vue'

export default {
  components: {
    HeroSection
  },
  async asyncData({ $content }) {
    const content = await $content('snippets', { deep: true })
      .only(['title', 'collection'])
      .fetch()

    return { content }
  },
  computed: {
    topics() {
      const totals = this.content.reduce((total, topic) => {
        total[topic.collection] = (total[topic.collection] || 0) + 1
        return total
      }, {})

      return Object.keys(totals).map((k) => ({
        category: k,
        count: totals[k]
      }))
    }
  }
}
</script>
