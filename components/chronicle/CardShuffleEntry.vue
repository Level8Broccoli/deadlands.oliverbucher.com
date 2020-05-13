<template>
  <tr>
    <td></td>
    <td colspan="5">
      Das Deck wurde gemischt.
      <div>
        <small>
          <span v-if="authorName !== ''" class="has-text-weight-bold">
            {{ authorName }} |
          </span>
          {{ meta.timestamp }}
        </small>
      </div>
    </td>
    <td></td>
  </tr>
</template>

<script>
export default {
  name: 'CardShuffleEntry',
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
    authorName() {
      return (
        this.$store.getters['players/getPlayerName'](this.meta.author.id) ||
        this.meta.author.name
      )
    }
  }
}
</script>
