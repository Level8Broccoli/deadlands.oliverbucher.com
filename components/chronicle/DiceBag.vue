<template>
  <nav class="level is-mobile">
    <div v-for="die in dice" :key="die" class="level-item has-text-centered">
      <div>
        <p class="title">
          <GameButton
            :title="'Wirf einen ' + die + ' Würfel'"
            button-type="text"
            :button-text="die"
            button-styles="['info']"
          />
        </p>
      </div>
    </div>
  </nav>
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
  }
}
</script>
