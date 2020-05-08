<template>
  <tbody>
    <tr>
      <td>
        <GameButton button-type="roll" @button-click="rollDice()" />
      </td>
      <td>
        <a @click="show = !show">{{ skill.name }}</a>
        <small>{{ skill.attr }}</small>
      </td>
      <td v-for="die in dice" :key="die">
        <GameButton
          :button-type="buttonType(skill, die)"
          @button-click="clickSkill(skill, die)"
        />
      </td>
    </tr>
    <tr v-if="show">
      <td colspan="6">{{ skill.descr }}</td>
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
    }
  },
  methods: {
    rollDice() {
      const comment = `${this.skill.name}`
      const dice = []
      dice.push({
        type: this.currentValue === 0 ? 4 : this.currentValue,
        count: 1
      })
      const options = {
        wildDice: true,
        showLastRoll: true,
        explodingDice: true,
        showSuccessByFour: true
      }
      const modifications = []

      if (this.currentValue === 0) {
        modifications.push({
          name: 'Ungeübt',
          value: -2
        })
      }

      this.$store.dispatch('chronicle/rollDice', {
        comment,
        dice,
        options,
        modifications
      })
    },
    buttonType(skill, value) {
      if (skill.defaultValue >= value) {
        return 'fixed'
      } else if (this.currentValue >= value) {
        return 'checked'
      } else if (this.currentValueOfAttribute < value) {
        return 'point2'
      } else {
        return 'point1'
      }
    },
    clickSkill(skill, value) {
      this.$store.commit('charSave/clickSkill', {
        id: skill.id,
        value
      })
    }
  }
}
</script>
