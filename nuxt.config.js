import path from 'path'
import glob from 'glob'
import Mode from 'frontmatter-markdown-loader/mode'
import MarkdownIt from 'markdown-it'
import mip from 'markdown-it-prism'

const md = new MarkdownIt({
  html: true,
  typographer: true
})
md.use(mip)

function getMarkdownRoutes(markdownDir) {
  return glob
    .sync(`${markdownDir}/**/*.md`)
    .map((mdPath) => `/snippets/${path.basename(mdPath, '.md')}`)
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: 'A few lines of R',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  // '@/assets/css/prism-dracula.css'
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/eslint-module', // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/tailwindcss' // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    postcss: {
      plugins: {
        'postcss-import': {},
        tailwindcss: {},
        'postcss-nested': {},
        autoprefixer: {}
      }
    },
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'snippets'),
        options: {
          mode: [Mode.META, Mode.HTML],
          markdown(body) {
            return md.render(body)
          }
        }
      })
    }
  },

  generate: {
    routes: getMarkdownRoutes('snippets'),
    fallback: true
  }
}
