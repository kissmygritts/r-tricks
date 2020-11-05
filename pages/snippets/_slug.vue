<template>
  <div>
    <header class="flex justify-between p-2 lg:p-8 absolute">
      <div class="static inset-0">
        <nuxt-link class="text-sm text-gray-600 hover:underline" to="/">
          &larr; r-code.dev
        </nuxt-link>
      </div>
    </header>

    <div class="snippet__container pt-12">
      <div class="snippet__content">
        <h1
          class="text-4xl lg:text-5xl leading-8 font-bold tracking-tight text-gray-800 sm:leading-10"
        >
          {{ attributes.title }}
        </h1>

        <a
          class="block mt-6 text-blue-600 underline"
          :href="githubUrl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Edit on GitHub
        </a>

        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="markdown mt-10 text-gray-700" v-html="html"></div>
      </div>
    </div>
  </div>
</template>

<script>
import path from 'path'
const markdownFiles = require.context('~/snippets', true, /\.md$/)
const mkdfArray = Array.from(markdownFiles.keys())

const posts = mkdfArray.map((key) => ({
  filepath: `${key.replace('.md', '').replace('./', '')}`,
  slug: path.basename(key, '.md')
}))

export default {
  async asyncData({ params }) {
    try {
      const filteredPost = posts.filter((post) => post.slug === params.slug)
      const post = await import(`~/snippets/${filteredPost[0].filepath}.md`)
      return {
        ...post,
        params
      }
    } catch (err) {
      return false
    }
  },

  data() {
    return {
      posts
    }
  },

  computed: {
    githubUrl() {
      const url = this.meta.resourcePath.match(/snippets\/.*/g)
      return `https://github.com/kissmygritts/r-tricks/blob/master/${url}`
    }
  }
}
</script>

<style scoped>
.snippet__container {
  display: grid;
  grid-template-columns:
    [full-start] minmax(1em, 1fr)
    [main-start] minmax(0, 40em)
    [main-end] minmax(1em, 1fr)
    [full-end];
}

.snippet__content {
  grid-column: main;
}
</style>
