<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <nuxt-link :to="post._slug">
          {{ post.attributes.title }}
        </nuxt-link>
      </li>
    </ul>

    <pre><code>{{ posts }}</code></pre>
  </div>
</template>

<script>
import path from 'path'

export default {
  async asyncData() {
    const context = await require.context('~/snippets', true, /\.md$/)
    const posts = await context.keys().map((key) => ({
      ...context(key),
      _path: `/snippets/${key.replace('.md', '').replace('./', '')}`,
      _slug: `/snippets/${path.basename(key, '.md')}`
    }))

    return { posts: posts.reverse() }
  }
}
</script>
