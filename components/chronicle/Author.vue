<template>
  <div>
    <small>
      <span
        v-if="authorName !== ''"
        class="has-text-weight-bold"
        :title="authorIntroduction"
        @click="show = !show"
      >
        {{ authorName }}
        |
      </span>
      {{ timestamp }}
    </small>
    <div v-if="show">
      <small>
        {{ authorIntroduction }}
      </small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Author',
  props: {
    author: {
      type: Object,
      default() {
        return {}
      }
    },
    timestamp: { type: String, default: '' }
  },
  data() {
    return { show: false }
  },
  computed: {
    authorName() {
      return (
        this.$store.getters['players/getPlayerName'](this.author.id) ||
        this.author.name
      )
    },
    authorIntroduction() {
      return (
        this.$store.getters['players/getPlayerIntroduction'](this.author.id) ||
        this.author.introduction
      )
    }
  }
}
</script>
