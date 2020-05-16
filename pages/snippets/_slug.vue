<template>
  <div class="snippet__container pt-12">
    <div class="snippet__content">
      <h1
        class="text-4xl leading-8 font-extrabold tracking-tight text-gray-800 sm:leading-10"
      >
        {{ attributes.title }}
      </h1>

      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="markdown mt-12 text-gray-900" v-html="html"></div>
    </div>
    <!-- <h1>Create a frontmatter markdown powered blog with nuxt</h1>
    <pre><code>{{ params }}</code></pre>
    <pre><code>{{ html }}</code></pre>
    <pre><code>{{ meta }}</code></pre>
    <pre><code>{{ attributes }}</code></pre> -->
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
      // const post = await import(`~/snippets/${params.slug}.md`)
      // eslint-disable-next-line
      console.log(post)
      return {
        ...post,
        params
      }
    } catch (err) {
      // eslint-disable-next-line
      console.log(err)
      return false
    }
  },

  data() {
    return {
      posts
    }
  }
}
</script>

<style scoped>
.snippet__container {
  display: grid;
  grid-template-columns:
    [full-start] minmax(1em, 1fr)
    [main-start] minmax(0, 45em)
    [main-end] minmax(1em, 1fr)
    [full-end];
  /* border: 2px solid purple; */
}

.snippet__content {
  grid-column: main;
  /* border: 2px solid springgreen; */
}
</style>
