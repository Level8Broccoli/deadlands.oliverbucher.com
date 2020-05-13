<template>
  <tr :class="myEntry">
    <td></td>
    <td colspan="4">
      Karten wurden{{ isOpen ? '' : ' verdeckt' }} gezogen:
      <span class="tags">
        <span
          v-for="(card, index) in cards"
          :key="index"
          class="tag is-rounded"
          :class="
            !isOpen && meta.author.id !== myId
              ? ''
              : getCardName(card).includes('Diamonds') ||
                getCardName(card).includes('Hearts')
              ? 'is-danger'
              : getCardName(card).includes('Joker')
              ? 'is-primary'
              : 'is-dark'
          "
        >
          <span v-if="isOpen || meta.author.id === myId">
            <strong class="has-text-white">{{ getCardName(card) }}</strong>
            ({{ card }})
          </span>
          <span v-else><em>Karte verdeckt</em></span>
        </span>
      </span>
      <Author :author="meta.author" :timestamp="meta.timestamp" />
    </td>
    <td
      colspan="2"
      class="custom-card-background"
      :style="{ backgroundImage: backgroundImages }"
    ></td>
  </tr>
</template>

<script>
import Author from '~/components/chronicle/Author'

export default {
  name: 'CardDrawEntry',
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
    myId() {
      return this.$store.state.charSave.id
    },
    meta() {
      return this.entry.meta
    },
    myEntry() {
      return this.entry.meta.author.id === this.$store.state.charSave.id
        ? 'custom-is-own-row'
        : ''
    },
    backgroundImages() {
      const cardback = 'card_back.svg'
      const urls = []
      for (let index = 0; index < this.cards.length; index++) {
        const element = this.cards[index]
        if (this.isOpen || this.meta.author.id === this.myId) {
          urls.push(`url("/cards/${this.getCardPath(element)}")`)
        } else {
          urls.push(`url("/cards/${cardback}")`)
        }
      }
      return urls.join(', ')
    },
    cardBackgrounds() {
      let background = 'custom-card-background custom-card-background'
      if (this.cards.length === 1) {
        background += '-one'
      } else if (this.cards.length === 2) {
        background += '-two'
      } else if (this.cards.length === 3) {
        background += '-three'
      }
      return this.entry.meta.author.id === this.$store.state.charSave.id
        ? 'custom-is-own-row-chat ' + background
        : background
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

<style>
.custom-card-background {
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: top right, top right 50px, top right 100px;
}

.custom-card-background-one {
  background-image: url(/cards/card_back.svg);
  background-position: top right;
}
.custom-card-background-two {
  background-image: url(/cards/card_back.svg), url(/cards/card_back.svg);
  background-position: top right, top right 50px;
}
.custom-card-background-three {
  background-image: url(/cards/card_back.svg), url(/cards/card_back.svg),
    url(/cards/card_back.svg);
  background-position: top right, top right 50px, top right 100px;
}
</style>
