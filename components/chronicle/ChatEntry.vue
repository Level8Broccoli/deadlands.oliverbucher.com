<template>
  <tr :class="myEntry">
    <td></td>
    <td colspan="5">
      {{ message }}
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
  name: 'ChatEntry',
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
      return this.entry.meta.author.id === this.$store.state.charSave.id
        ? 'custom-is-own-row-chat'
        : ''
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
