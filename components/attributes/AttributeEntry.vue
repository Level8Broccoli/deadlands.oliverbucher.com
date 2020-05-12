<template>
  <tbody>
    <tr>
      <td>
        <div class="field has-addons">
          <p class="control">
            <GameButton
              button-preset="rollWithoutLabel"
              :dice-pool="dicePool"
              @click.native="rollDice"
            />
          </p>
          <p class="control">
            <GameButton button-preset="more" @click.native="openDiceModal" />
          </p>
        </div>
      </td>
      <td>
        <a @click="show = !show">{{ attribute.name }}</a>
      </td>
      <td v-for="die in dice" :key="die">
        <GameButton
          :button-preset="buttonType(die)"
          @click.native="clickAttribute(die)"
        />
      </td>
    </tr>
    <tr v-if="show">
      <td colspan="6">{{ attribute.descr }}</td>
    </tr>
  </tbody>
</template>

<script>
import GameButton from '~/components/common/GameButton'

export default {
  name: 'AttributeEntry',
  components: { GameButton },
  props: {
    attribute: {
      type: Object,
      default() {
        return {}
      }
    },
    dice: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return { show: false }
  },
  computed: {
    currentValue() {
      const list = this.$store.state.charSave.attributeList
      const attributeSaved = list.find((e) => e.id === this.attribute.id)
      if (typeof attributeSaved !== 'undefined') {
        return attributeSaved.value
      }
      return 4
    },
    dicePool() {
      return {
        comment: this.attribute.name,
        dice: [{ type: this.currentValue, count: 1 }],
        options: {
          wildDice: true,
          showLastRoll: true,
          explodingDice: true,
          showSuccessByFour: true
        }
      }
    }
  },
  methods: {
    openDiceModal() {
      this.$store.commit('diceModal/openModal', this.dicePool)
    },
    rollDice() {
      this.$store.dispatch('chronicle/rollDice', this.dicePool)
    },
    buttonType(value) {
      if (this.attribute.defaultValue >= value) {
        return 'defaultValue'
      }
      if (this.currentValue >= value) {
        return 'checked'
      }
      return 'unchecked1'
    },
    clickAttribute(value) {
      this.$store.commit('charSave/clickAttribute', {
        id: this.attribute.id,
        value
      })
    }
  }
}
</script>
