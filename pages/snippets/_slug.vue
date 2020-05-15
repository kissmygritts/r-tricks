<template>
  <div>
    <h1>Create a frontmatter markdown powered blog with nuxt</h1>
    <pre><code>{{ params }}</code></pre>
    <pre><code>{{ html }}</code></pre>
    <pre><code>{{ meta }}</code></pre>
    <pre><code>{{ attributes }}</code></pre>
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
