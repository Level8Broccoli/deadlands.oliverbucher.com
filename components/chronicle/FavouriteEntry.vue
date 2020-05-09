<template>
  <div class="tile is-child custom-flex-item">
    <div class="field has-addons">
      <p class="control">
        <GameButton
          button-type="roll"
          :button-text="favourite.comment"
          :title="dicePoolDescription"
          @button-click="rollDice"
        />
      </p>
      <p class="control">
        <GameButton
          button-type="more"
          :title="dicePoolDescription"
          @button-click="openDiceModal"
        />
      </p>
      <p class="control">
        <GameButton button-type="delete" @button-click="deleteFavorite" />
      </p>
    </div>
  </div>
</template>

<script>
import GameButton from '~/components/common/GameButton'

export default {
  name: 'FavoriteEntry',
  components: { GameButton },
  props: {
    favourite: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    dicePoolDescription() {
      const diceFiltered = this.favourite.dice.filter((e) => e.count > 0)
      const diceAsString = diceFiltered.map((e) => `${e.count}W${e.type}`)
      return `Würfelpool: ${diceAsString.join(' + ')}`
    }
  },
  methods: {
    openDiceModal() {
      this.$store.commit('diceModal/openModal', this.favourite)
    },
    rollDice() {
      this.$store.dispatch('chronicle/rollDice', this.favourite)
    },
    deleteFavorite() {
      this.$emit('delete-favourite')
    }
  }
}
</script>

<style scoped>
.custom-flex-item {
  flex-grow: initial;
}
</style>
