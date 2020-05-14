<template>
  <div class="box">
    <div class="content">
      <ol>
        <li v-for="(card, index) in lastCardsDrawn" :key="index">
          {{ getAuthorName(card.id) }}
          <span
            class="tag is-rounded"
            :class="
              getCardName(card.num).includes('Diamonds') ||
              getCardName(card.num).includes('Hearts')
                ? 'is-danger'
                : getCardName(card.num).includes('Joker')
                ? 'is-primary'
                : 'is-dark'
            "
          >
            {{ getCardName(card.num) }}
          </span>
          <a class="delete" @click="removeEntry(card.id)"></a>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FightTracker',
  computed: {
    lastCardsDrawn() {
      const lastCardsDrawn = this.$store.getters.getLastCardsDrawnAsListSorted
      return lastCardsDrawn
    }
  },
  methods: {
    getAuthorName(id) {
      return this.$store.getters['players/getPlayerName'](id) || id
    },
    getCardName(num) {
      return this.$store.state.cards[num].name
    },
    removeEntry(id) {
      this.$store.commit('removeLastCard', id)
    }
  }
}
</script>
