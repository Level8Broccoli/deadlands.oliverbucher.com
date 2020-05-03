<template>
  <div class="box">
    <nav class="level">
      <div class="level-item has-text-centered">
        <div><p class="title has-text-weight-bold">Würfel</p></div>
      </div>
      <div v-for="die in dice" :key="die" class="level-item has-text-centered">
        <div>
          <p class="title">
            <GameButton
              :title="'Wirf einen ' + die + ' Würfel'"
              button-type="text"
              :button-text="'W ' + die"
              :button-styles="['info', 'light']"
              @button-click="rollDice(die)"
            />
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import GameButton from '~/components/common/GameButton'

export default {
  name: 'DiceBag',
  components: { GameButton },
  computed: {
    dice() {
      return this.$store.state.dice
    }
  },
  methods: {
    rollDice(die) {
      this.$store.dispatch('chronicle/rollDice', {
        comment: 'Manueller Wurf',
        dice: die
      })
    }
  }
}
</script>
