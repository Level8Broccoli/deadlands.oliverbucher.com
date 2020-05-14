<template>
  <tr :class="myEntry">
    <td></td>
    <td colspan="5">
      {{ message }}
      <Author :author="meta.author" :timestamp="meta.timestamp" />
    </td>
    <td></td>
  </tr>
</template>

<script>
import Author from '~/components/chronicle/Author'

export default {
  name: 'ChatEntry',
  components: { Author },
  props: {
    entry: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    meta() {
      return this.entry.meta
    },
    message() {
      return this.entry.payload.message
    },
    myEntry() {
      if (this.$store.getters['chronicle/isMyLastEntry'](this.entry)) {
        return 'custom-is-my-last-entry'
      } else {
        return this.entry.meta.author.id === this.$store.state.charSave.id
          ? 'custom-is-own-row-chat'
          : ''
      }
    }
  }
}
</script>
