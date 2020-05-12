<template>
  <div class="tile is-child custom-flex-item">
    <div class="field has-addons">
      <p class="control">
        <GameButton
          button-preset="rollWithLabel"
          :dice-pool="dicePool"
          @click.native="clickMain"
        />
      </p>
      <p v-if="hasMore" class="control">
        <GameButton button-preset="more" @click.native="clickMore" />
      </p>
      <p v-if="hasDelete" class="control">
        <GameButton button-preset="delete" @click.native="clickDelete" />
      </p>
    </div>
  </div>
</template>

<script>
import GameButton from '~/components/common/GameButton'

export default {
  name: 'DiceShorthand',
  components: { GameButton },
  props: {
    label: {
      type: String,
      default: ''
    },
    hasMore: { type: Boolean, default: false },
    hasDelete: { type: Boolean, default: false },
    dicePool: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    clickMain() {
      this.$emit('click-main')
    },
    clickMore() {
      this.$emit('click-more')
    },
    clickDelete() {
      this.$emit('click-delete')
    }
  }
}
</script>

<style scoped>
.custom-flex-item {
  flex-grow: initial;
}
</style>
