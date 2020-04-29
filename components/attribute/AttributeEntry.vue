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
    savedValue(attribute) {
      const list = this.$store.state.charSave.attributesList
      return list.find((e) => e.id === attribute.id)
    },
    rollDice() {},
    buttonType(attribute, value) {
      if (attribute.defaultValue >= value) {
        return 'fixed'
      } else if (
        this.savedValue(attribute) &&
        this.savedValue(attribute).value >= value
      ) {
        return 'checked'
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
