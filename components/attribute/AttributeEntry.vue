<template>
  <tbody>
    <tr>
      <td>
        <GameButton button-type="roll" @button-click="rollDice(attribute)" />
      </td>
      <td>
        <a @click="show = !show">{{ attribute.name }}</a>
      </td>
      <td>
        <GameButton button-type="fixed" />
        <!-- <button class="button is-info" @click="buttonClick(4, attribute.id)">
          &hearts;
        </button> -->
      </td>
      <td>
        <GameButton button-type="point1" />
        <!-- <button
          class="button"
          :class="renderButton(6, attribute.id)"
          @click="buttonClick(6, attribute.id)"
          v-html="getButtonContent(6, attribute.id)"
        ></button> -->
      </td>
      <td>
        <GameButton button-type="point1" />
        <!-- <button
          class="button"
          :class="renderButton(8, attribute.id)"
          @click="buttonClick(8, attribute.id)"
          v-html="getButtonContent(8, attribute.id)"
        ></button> -->
      </td>
      <td>
        <GameButton button-type="point1" />
        <!-- <button
          class="button"
          :class="renderButton(10, attribute.id)"
          @click="buttonClick(10, attribute.id)"
          v-html="getButtonContent(10, attribute.id)"
        ></button> -->
      </td>
      <td>
        <GameButton button-type="point1" />
        <!-- <button
          class="button"
          :class="renderButton(12, attribute.id)"
          @click="buttonClick(12, attribute.id)"
          v-html="getButtonContent(12, attribute.id)"
        ></button> -->
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
    return { show: false }
  },
  methods: {
    rollDice() {},
    buttonType(obj, value) {
      if (obj.defaultValue >= value) {
        return 'fixed'
      }
    }
  }
}
</script>
