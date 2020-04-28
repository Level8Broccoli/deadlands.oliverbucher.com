<template>
  <div>
    <button class="button" :class="buttonClass" @click="buttonClick">
      {{ buttonContent }}
      <font-awesome-icon :icon="['fas', 'coffee']" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'GameButton',
  props: {
    buttonType: {
      type: String,
      default: 'point1',
      validator(value) {
        return ['point1', 'point2', 'checked', 'standard', 'roll'].includes(
          value
        )
      }
    }
  },
  computed: {
    buttonClass() {
      return {
        'is-light': this.buttonType === 'point1',
        'is-danger is-light': this.buttonType === 'point2',
        'is-success': this.buttonType === 'checked',
        'is-info': this.buttonType === 'standard',
        'is-info is-light': this.buttonType === 'roll'
      }
    },
    buttonContent() {
      return {
        point1: 'point1',
        point2: 'point2',
        checked: 'checked',
        standard: 'standard',
        roll: 'roll'
      }[this.buttonType]
    }
  },
  methods: {
    buttonClick() {
      this.$emit('button-click')
    }
  }
}
</script>
