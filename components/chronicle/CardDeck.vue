<template>
  <div class="box">
    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="title">
            Pokerkarten
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">
            Deck
            <a title="Deck mischen" @click="shuffleDeck">
              <span class="icon has-text-info">
                <font-awesome-icon :icon="['fas', 'random']" />
              </span>
            </a>
          </p>
          <p class="title">
            {{ numberOfCardsRemaining }} / {{ numberOfCards }}
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Ziehe Karte(n) offen</p>
          <div class="buttons has-addons is-centered">
            <button class="button is-medium" @click="drawOpen(1)">1</button>
            <button class="button is-light is-medium" @click="drawOpen(2)">
              2
            </button>
            <button class="button is-dark is-medium" @click="drawOpen(3)">
              3
            </button>
          </div>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Ziehe Karte(n) verdeckt</p>
          <div class="buttons has-addons is-centered">
            <button class="button is-medium" @click="drawClosed(1)">1</button>
            <button class="button is-light is-medium" @click="drawClosed(2)">
              2
            </button>
            <button class="button is-dark is-medium" @click="drawClosed(3)">
              3
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'CardDeck',
  computed: {
    numberOfCards() {
      return Object.keys(this.cards).length
    },
    numberOfCardsRemaining() {
      return Object.keys(this.cardsRemaining).length
    },
    cardBack() {
      return this.$store.state.cardBack
    },
    cards: {
      get() {
        return this.$store.state.cards
      },
      set(value) {}
    },
    cardsRemaining: {
      get() {
        return this.$store.state.cardsRemaining
      },
      set(value) {}
    }
  },
  methods: {
    shuffleDeck() {
      const type = 'shuffleDeck'
      this.$store.dispatch('chronicle/commitOwnAction', {
        meta: { type },
        payload: {}
      })
    },
    drawOpen(num) {
      // TODO
    },
    drawClosed(num) {
      // TODO
    }
  }
}
</script>
