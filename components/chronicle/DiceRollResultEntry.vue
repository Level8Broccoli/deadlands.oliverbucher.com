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
        {{ diceRoll.comment }}
        <div class="has-text-weight-bold">
          <small>{{ meta.timestamp }}</small>
        </div>
      </td>
      <td>
        <!-- <div class="buttons">
          <button
            v-for="die in entry.rollNormal"
            :key="die"
            class="button is-light"
            :class="renderDice(die.rolled, die.dice)"
          >
            {{ die.rolled }}
          </button>
        </div> -->
      </td>
      <td>
        <!-- <div class="buttons">
          <button
            v-for="die in entry.rollWild"
            :key="die"
            class="button is-light"
            :class="renderDice(die.rolled, die.dice)"
          >
            {{ die.rolled }}
          </button>
        </div> -->
      </td>
      <td>
        <!-- <div class="buttons">
          <button
            v-for="mod in entry.modifications"
            :key="mod"
            class="button is-light"
            :class="mod.value < 0 ? 'is-danger' : 'is-success'"
          >
            {{ mod.name }} {{ mod.value }}
          </button>
        </div> -->
      </td>
      <td>
        <!-- <button class="button" :class="renderResult(entry.result)">
          {{ entry.result.value }}
        </button> -->
      </td>
      <td>
        <!-- <div v-if="entry.result.success" class="has-text-success">Erfolg!</div>
        <div v-else-if="entry.result.critFailure" class="has-text-danger">
          Snake Eyes!
        </div>
        <div v-else class="has-text-warning">Fehlschlag</div>
        <div v-if="entry.result.raise === 1" class="has-text-info">
          1 Steigerung
        </div>
        <div v-if="entry.result.raise > 1" class="has-text-info">
          {{ entry.result.raise }} Steigerungen
        </div> -->
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
      const reroll = { ...dice }
      reroll.comment = dice.comment.includes(REROLL_PREFIX)
        ? dice.comment
        : `${REROLL_PREFIX} ${dice.comment}`
      reroll.showLastRoll = this.$route.name !== 'chronicle'
      this.$store.dispatch('chronicle/rollDice', reroll)
    }
  }
}
</script>
