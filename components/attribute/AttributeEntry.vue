<template>
  <tbody>
    <tr>
      <td>
        <GameButton button-type="roll" @button-click="rollDice(attribute)" />
      </td>
      <td>
        <a @click="show = !show">{{ attribute.name }}</a>
      </td>
      <td v-for="die in dice" :key="die">
        <GameButton
          :button-type="buttonType(attribute, die)"
          @button-click="clickAttribute(attribute, die)"
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
    }
  },
  data() {
    return { show: false, dice: [4, 6, 8, 10, 12] }
  },
  methods: {
    rollDice() {},
    buttonType(obj, value) {
      if (obj.defaultValue >= value) {
        return 'fixed'
      }
      return 'point1'
    },
    clickAttribute(attribute, value) {
      this.$store.commit('charSave/clickAttribute', {
        id: attribute.id,
        value
      })
    }
  }
}
</script>
