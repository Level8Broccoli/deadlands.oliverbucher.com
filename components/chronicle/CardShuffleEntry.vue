<template>
  <tr>
    <td></td>
    <td colspan="5">
      Das Deck wurde gemischt.
      <Author :author="meta.author" :timestamp="meta.timestamp" />
    </td>
    <td></td>
  </tr>
</template>

<script>
import Author from '~/components/chronicle/Author'

export default {
  name: 'CardShuffleEntry',
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
    }
  }
}
</script>
