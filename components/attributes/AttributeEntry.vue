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
      return 0
    }
  },
  methods: {
    rollDice(attribute) {
      // TODO
    },
    buttonType(attribute, value) {
      if (attribute.defaultValue >= value) {
        return 'fixed'
      }
      if (this.currentValue >= value) {
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
