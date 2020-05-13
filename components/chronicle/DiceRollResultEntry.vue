<template>
  <tr :class="myEntry">
    <td>
      <div class="field has-addons">
        <p class="control">
          <GameButton
            button-preset="rollWithoutLabel"
            :dice-pool="dicePool"
            @click.native="rerollDice"
          />
        </p>
        <p class="control">
          <GameButton button-preset="more" @click.native="openDiceModal" />
        </p>
      </div>
    </td>
    <td>
      {{ dicePool.comment }}
      <span class="tags">
        <span
          v-for="(tag, index) in dicePool.tags"
          :key="index"
          class="tag is-rounded"
        >
          {{ tag }}
        </span>
      </span>
      <div>
        <small>
          <span v-if="authorName !== ''" class="has-text-weight-bold">
            {{ authorName }} |
          </span>
          {{ meta.timestamp }}
        </small>
      </div>
    </td>
    <td>
      <div class="buttons">
        <button
          v-for="(die, index) in rollResult.rollNormal.flat()"
          :key="index"
          class="button is-light custom-button-font"
          :class="renderDice(die)"
          :title="'W' + die.die"
        >
          {{ die.rolled }}
        </button>
      </div>
    </td>
    <td>
      <div class="buttons">
        <button
          v-for="(die, index) in rollResult.rollWild.flat()"
          :key="index"
          class="button is-light custom-button-font"
          :class="renderDice(die)"
          :title="'W' + die.die"
        >
          {{ die.rolled }}
        </button>
      </div>
    </td>
    <td>
      <div class="buttons">
        <button
          v-for="(mod, index) in dicePool.modifications"
          :key="index"
          class="button is-light"
          :class="mod.value < 0 ? 'is-danger' : 'is-success'"
          v-if="mod.name.trim().length > 0 || mod.value !== 0"
        >
          {{ mod.name }} {{ mod.value }}
        </button>
      </div>
    </td>
    <td>
      <button class="button custom-button-font" :class="renderResult()">
        {{ rollResult.endResult }}
      </button>
    </td>
    <td>
      <div v-if="dicePool.options.showSuccessByFour">
        <div v-if="rollResult.effects.success" class="has-text-success">
          Erfolg!
        </div>
        <div v-else-if="rollResult.effects.critFailure" class="has-text-danger">
          Snake Eyes!
        </div>
        <div v-else class="has-text-warning">Fehlschlag</div>
        <div v-if="rollResult.effects.raise === 1" class="has-text-info">
          1 Steigerung
        </div>
        <div v-if="rollResult.effects.raise > 1" class="has-text-info">
          {{ rollResult.effects.raise }} Steigerungen
        </div>
      </div>
    </td>
  </tr>
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
    dicePool() {
      return this.entry.payload.dicePool
    },
    rollResult() {
      return this.entry.payload.rollResult
    },
    myEntry() {
      return this.entry.meta.author === this.$store.state.charSave.id
        ? 'custom-is-own-row'
        : ''
    },
    authorName() {
      return (
        this.$store.getters['charSave/getAuthorName'](this.meta.author) ||
        this.meta.authorName
      )
    },
    dicePoolDescription() {
      const diceFiltered = this.dicePool.dice.filter((e) => e.count > 0)
      const diceAsString = diceFiltered.map((e) => `${e.count}W${e.type}`)
      return `Würfelpool: ${diceAsString.join(' + ')}`
    }
  },
  methods: {
    openDiceModal() {
      const REROLL_TAG = 'Reroll'

      const reroll = JSON.parse(JSON.stringify(this.dicePool))
      if (!reroll.tags) {
        reroll.tags = []
      }
      if (!reroll.tags.includes(REROLL_TAG)) {
        reroll.tags.push(REROLL_TAG)
      }
      reroll.options.showLastRoll = this.$route.name !== 'chronicle'
      this.$store.commit('diceModal/openModal', reroll)
    },
    rerollDice() {
      const REROLL_TAG = 'Reroll'
      const reroll = JSON.parse(JSON.stringify(this.dicePool))
      reroll.tags = reroll.tags ? [...reroll.tags] : []
      if (!reroll.tags.includes(REROLL_TAG)) {
        reroll.tags.push(REROLL_TAG)
      }
      reroll.options.showLastRoll = this.$route.name !== 'chronicle'
      this.$store.dispatch('chronicle/rollDice', reroll)
    },
    renderResult() {
      if (this.dicePool.options.showSuccessByFour) {
        const result = this.rollResult.effects
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
      }
      return 'is-light'
    },
    renderDice({ rolled, die, explodingDice }) {
      if (rolled === 1) {
        return 'is-danger'
      }
      if (rolled === die && explodingDice) {
        return 'is-success'
      }
      return ''
    }
  }
}
</script>

<style>
.custom-button-font {
  font-family: 'Oleo Script';
}
</style>
