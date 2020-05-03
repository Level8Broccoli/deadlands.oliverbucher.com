<template>
  <tr :class="myEntry">
    <td></td>
    <td colspan="5">
      Karten wurden{{ isOpen ? '' : ' verdeckt' }} gezogen:
      <span class="tags">
        <span
          v-for="(card, index) in cards"
          :key="index"
          class="tag is-rounded"
          :class="
            !isOpen && meta.author !== myId
              ? ''
              : getCardName(card).includes('Diamonds') ||
                getCardName(card).includes('Hearts')
              ? 'is-danger'
              : getCardName(card).includes('Joker')
              ? 'is-primary'
              : 'is-dark'
          "
        >
          <span v-if="isOpen || meta.author === myId">
            <strong class="has-text-white">{{ getCardName(card) }}</strong>
            ({{ card }})
          </span>
          <span v-else><em>Karte verdeckt</em></span>
        </span>
      </span>
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
  name: 'CardDrawEntry',
  props: {
    entry: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    myId() {
      return this.$store.state.charSave.id
    },
    meta() {
      return this.entry.meta
    },

    myEntry() {
      return this.entry.meta.author === this.$store.state.charSave.id
        ? 'custom-is-own-row-chat'
        : ''
    },
    authorName() {
      return (
        this.$store.getters['charSave/getAuthorName'](this.meta.author) ||
        this.meta.authorName
      )
    },
    cards() {
      return this.entry.payload.cards
    },
    isOpen() {
      return this.entry.payload.open
    }
  },
  methods: {
    getCardName(num) {
      return this.$store.state.cards[num].name
    },
    getCardPath(num) {
      return this.$store.state.cards[num].path
    }
  }
}
</script>
