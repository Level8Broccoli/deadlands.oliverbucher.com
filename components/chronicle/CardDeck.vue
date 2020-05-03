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
          <p class="title">{{ cardsRemaining.length }} / {{ numberOfCards }}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Ziehe Karte(n) offen</p>
          <div class="buttons has-addons is-centered">
            <button class="button is-medium" @click="drawCards(1, true)">
              1
            </button>
            <button
              class="button is-light is-medium"
              @click="drawCards(2, true)"
            >
              2
            </button>
            <button
              class="button is-dark is-medium"
              @click="drawCards(3, true)"
            >
              3
            </button>
          </div>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Ziehe Karte(n) verdeckt</p>
          <div class="buttons has-addons is-centered">
            <button class="button is-medium" @click="drawCards(1, false)">
              1
            </button>
            <button
              class="button is-light is-medium"
              @click="drawCards(2, false)"
            >
              2
            </button>
            <button
              class="button is-dark is-medium"
              @click="drawCards(3, false)"
            >
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
      set(value) {
        this.$commit('setCardsRemaining', value)
      }
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
    drawCards(num, open) {
      if (this.cardsRemaining.length >= num) {
        const cards = []
        let deck = [...this.cardsRemaining]
        for (let i = 0; i < num; i++) {
          const randomCardNumber = Math.floor(
            Math.random() * Object.keys(deck).length
          )
          cards.push(randomCardNumber)
          deck = deck.filter((e) => e !== randomCardNumber)
        }
        this.$store.dispatch('chronicle/commitOwnAction', {
          meta: { type: 'drawCards' },
          payload: { cards, newDeck: deck, open }
        })
      }
    }
  }
}
</script>
