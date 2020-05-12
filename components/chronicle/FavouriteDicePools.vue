<template>
  <div class="box">
    <div v-if="favourites.length === 0">
      <span class="is-italic">Noch keine Favoriten erstellt</span>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent custom-flex-flow">
        <div v-for="(favourite, index) in favourites" :key="index">
          <DiceShorthand
            :label="favourite.comment"
            :has-more="true"
            :has-delete="true"
            @click-main="rollDice(favourite)"
            @click-more="openDiceModal(favourite)"
            @click-delete="deleteFavourite(index)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DiceShorthand from '~/components/common/DiceShorthand'

export default {
  name: 'FavoriteDicePools',
  components: { DiceShorthand },
  computed: {
    favourites() {
      return this.$store.state.charSave.favouriteDicePools
    }
  },
  methods: {
    openDiceModal(favourite) {
      this.$store.commit('diceModal/openModal', favourite)
    },
    rollDice(favourite) {
      this.$store.dispatch('chronicle/rollDice', favourite)
    },
    deleteFavourite(index) {
      this.$store.commit('charSave/deleteFavourite', index)
    }
  }
}
</script>

<style scoped>
.custom-flex-flow {
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
