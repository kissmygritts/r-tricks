<template>
  <div class="pt-32 bg-white">
    <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <p
          class="text-base leading-6 text-blue-600 font-semibold tracking-wide uppercase"
        >
          r-code.dev
        </p>
        <h2
          class="mt-8 text-3xl leading-8 font-extrabold tracking-tight text-gray-800 sm:text-4xl sm:leading-10"
        >
          Helpful snippets of R code
        </h2>
        <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-700 lg:mx-auto">
          A collection of examples to solve common problems in R
        </p>

        <div class="mt-16">
          <a
            href="https://github.com/kissmygritts"
            class="py-4 px-8 bg-transparent hover:bg-blue-600 text-xl text-blue-600 font-semibold hover:text-white border border-blue-600 hover:border-transparent rounded"
          >
            Contribute on GitHub
          </a>
        </div>
      </div>

      <div class="snippet__container mt-40">
        <SnippetList :snippets="posts" class="snippet__content" />
      </div>
    </div>
  </div>
</template>

<script>
import path from 'path'
import SnippetList from '~/components/SnippetList.vue'

export default {
  components: { SnippetList },

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

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
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
