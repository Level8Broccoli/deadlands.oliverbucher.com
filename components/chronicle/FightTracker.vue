<template>
  <div class="box">
    <div class="content">
      <ol>
        <li v-for="(card, index) in lastCardsDrawn" :key="index">
          {{ getAuthorName(card[0]) }}
          <span
            class="tag is-rounded"
            :class="
              getCardName(card[1]).includes('Diamonds') ||
              getCardName(card[1]).includes('Hearts')
                ? 'is-danger'
                : getCardName(card[1]).includes('Joker')
                ? 'is-primary'
                : 'is-dark'
            "
          >
            {{ getCardName(card[1]) }}
          </span>
          <a class="delete" @click="removeEntry(card[0])"></a>
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
      return this.$store.getters.getLastCardsDrawnAsListSorted
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
      this.$store.commit('removeEntry', id)
    }
  }
}
</script>
