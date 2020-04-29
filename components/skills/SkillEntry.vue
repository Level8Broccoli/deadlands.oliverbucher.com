<template>
  <tbody>
    <tr>
      <td>
        <GameButton button-type="roll" @button-click="rollDice(skill)" />
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
      return 0
    }
  },
  methods: {
    rollDice(skill) {
      // TODO
    },
    buttonType(skill, value) {
      if (skill.defaultValue >= value) {
        return 'fixed'
      }
      if (this.currentValue >= value) {
        return 'checked'
      }
      return 'point1'
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
