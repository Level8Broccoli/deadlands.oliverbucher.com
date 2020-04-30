<template>
  <tbody>
    <tr>
      <td>
        <GameButton
          button-type="roll"
          title="Wurf wiederholen"
          @button-click="rerollDice(diceRoll)"
        />
      </td>
      <td>
        {{ diceRoll.config.comment }}
        <div class="has-text-weight-bold">
          <small>{{ meta.timestamp }}</small>
        </div>
      </td>
      <td>
        <div class="buttons">
          <button
            v-for="(die, index) in diceRoll.rollNormal"
            :key="index"
            class="button is-light"
            :class="renderDice(die.rolled, die.dice)"
          >
            {{ die.rolled }}
          </button>
        </div>
      </td>
      <td>
        <div class="buttons">
          <button
            v-for="(die, index) in diceRoll.rollWild"
            :key="index"
            class="button is-light"
            :class="renderDice(die.rolled, die.dice)"
          >
            {{ die.rolled }}
          </button>
        </div>
      </td>
      <td>
        <div class="buttons">
          <button
            v-for="(mod, index) in diceRoll.config.modifications"
            :key="index"
            class="button is-light"
            :class="mod.value < 0 ? 'is-danger' : 'is-success'"
          >
            {{ mod.name }} {{ mod.value }}
          </button>
        </div>
      </td>
      <td>
        <button class="button" :class="renderResult(diceRoll.result)">
          {{ diceRoll.result.value }}
        </button>
      </td>
      <td>
        <div v-if="diceRoll.result.success" class="has-text-success">
          Erfolg!
        </div>
        <div v-else-if="diceRoll.result.critFailure" class="has-text-danger">
          Snake Eyes!
        </div>
        <div v-else class="has-text-warning">Fehlschlag</div>
        <div v-if="diceRoll.result.raise === 1" class="has-text-info">
          1 Steigerung
        </div>
        <div v-if="diceRoll.result.raise > 1" class="has-text-info">
          {{ diceRoll.result.raise }} Steigerungen
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
import GameButton from '~/components/common/GameButton'

export default {
  name: 'DiceRollResultEntry',
  components: { GameButton },
  props: {
    entry: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    meta() {
      return this.entry.meta
    },
    diceRoll() {
      return this.entry.payload
    }
  },
  methods: {
    rerollDice(dice) {
      const REROLL_PREFIX = '[Reroll]'
      const reroll = { ...dice.config }
      reroll.comment = dice.config.comment.includes(REROLL_PREFIX)
        ? dice.config.comment
        : `${REROLL_PREFIX} ${dice.config.comment}`
      reroll.showLastRoll = this.$route.name !== 'chronicle'
      this.$store.dispatch('chronicle/rollDice', reroll)
    },
    renderResult(result) {
      if (result.raise > 0) {
        return 'is-primary'
      }
      if (result.success) {
        return 'is-success'
      }
      if (result.critFailure) {
        return 'is-danger'
      }
      return 'is-warning'
    },
    renderDice(result, die) {
      if (result === 1) {
        return 'is-danger'
      }
      if (result === die) {
        return 'is-success'
      }
      return ''
    }
  }
}
</script>
