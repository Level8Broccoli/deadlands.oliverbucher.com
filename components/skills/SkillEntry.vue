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
        <a @click="show = !show">{{ skill.name }}</a>
        <small>{{ skill.attr }}</small>
      </td>
      <td v-for="die in dice" :key="die">
        <GameButton
          :button-preset="buttonType(die)"
          @click.native="clickSkill(die)"
        />
      </td>
    </tr>
    <tr v-if="show">
      <td colspan="7">{{ skill.descr }}</td>
    </tr>
  </tbody>
</template>

<script>
import GameButton from '~/components/common/GameButton'

export default {
  name: 'SkillEntry',
  components: { GameButton },
  props: {
    skill: {
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
      const list = this.$store.state.charSave.skillList
      const skillSaved = list.find((e) => e.id === this.skill.id)
      if (typeof skillSaved !== 'undefined') {
        return skillSaved.value
      }
      if (this.skill.defaultValue) {
        return 4
      }
      return 0
    },
    currentValueOfAttribute() {
      const list = this.$store.state.charSave.attributeList
      const attributeSaved = list.find((e) => e.id === this.skill.attr)
      if (typeof attributeSaved !== 'undefined') {
        return attributeSaved.value
      }
      return 4
    },
    dicePool() {
      return {
        comment: this.skill.name,
        dice: [
          { type: this.currentValue === 0 ? 4 : this.currentValue, count: 1 }
        ],
        options: {
          wildDice: true,
          showLastRoll: true,
          explodingDice: true,
          showSuccessByFour: true
        },
        modifications:
          this.currentValue === 0
            ? [
                {
                  name: 'Ungeübt',
                  value: -2
                }
              ]
            : []
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
      if (this.skill.defaultValue >= value) {
        return 'defaultValue'
      } else if (this.currentValue >= value) {
        return 'checked'
      } else if (this.currentValueOfAttribute < value) {
        return 'unchecked2'
      } else {
        return 'unchecked1'
      }
    },
    clickSkill(value) {
      this.$store.commit('charSave/clickSkill', {
        id: this.skill.id,
        value
      })
    }
  }
}
</script>
