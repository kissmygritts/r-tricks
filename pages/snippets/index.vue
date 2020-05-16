<template>
  <div>
    <SnippetList :snippets="posts" />
    <!-- <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <nuxt-link :to="post._slug">
          {{ post.attributes.title }}
        </nuxt-link>
      </li>
    </ul> -->

    <pre><code>{{ posts }}</code></pre>
  </div>
</template>

<script>
import path from 'path'
import SnippetList from '~/components/SnippetList.vue'

export default {
  components: {
    SnippetList
  },
  async asyncData() {
    const context = await require.context('~/snippets', true, /\.md$/)
    const posts = await context.keys().map((key) => ({
      attributes: context(key).attributes,
      filepath: `/snippets/${key.replace('.md', '').replace('./', '')}`,
      route: `/snippets/${path.basename(key, '.md')}`,
      slug: `${path.basename(key, '.md')}`
    }))

    return { posts }
  }
}
</script>
