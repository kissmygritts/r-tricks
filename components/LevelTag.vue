<template>
  <span class="px-3 py-1 text-xs md:text-sm bg-gray-200" :class="tagClasses">
    {{ level }}
  </span>
</template>

<script>
export default {
  name: 'LevelTag',
  props: {
    level: {
      default: 'tip',
      type: String
    }
  },
  data() {
    return {
      possibleTagStates: {
        basic: ['bg-green-200', 'text-green-700'],
        intermediate: ['bg-indigo-200', 'text-indigo-700'],
        advanced: ['bg-purple-200', 'text-purple-700'],
        tip: ['bg-yellow-200', 'text-yellow-700']
      }
    }
  },
  computed: {
    tagClasses() {
      const level = this.level.toLowerCase()
      return ['basic', 'intermediate', 'advanced'].includes(level)
        ? this.possibleTagStates[level]
        : this.possibleTagStates.tip
    }
  }
}
</script>
