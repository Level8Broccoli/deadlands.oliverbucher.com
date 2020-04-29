<template>
  <div>
    <button class="button" :class="buttonClass" @click="buttonClick">
      <span class="icon">
        <font-awesome-icon :icon="['fas', buttonSymbol]" />
      </span>
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
        return ['point1', 'point2', 'checked', 'fixed', 'roll'].includes(value)
      }
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  computed: {
    buttonClass() {
      return {
        'is-light': this.buttonType === 'point1',
        'is-danger is-light': this.buttonType === 'point2',
        'is-success': this.buttonType === 'checked',
        'is-info': this.buttonType === 'fixed',
        'is-info is-light': this.buttonType === 'roll',
        'is-small': this.size === 'small'
      }
    },
    buttonSymbol() {
      return {
        point1: 'times',
        point2: 'times',
        checked: 'check',
        fixed: 'check-double',
        roll: 'recycle'
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
