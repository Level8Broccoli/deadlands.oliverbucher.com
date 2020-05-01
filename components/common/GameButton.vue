<template>
  <div>
    <button
      class="button"
      :class="buttonClass"
      :title="title"
      @click="buttonClick"
    >
      <span v-if="buttonType !== 'text'" class="icon">
        <font-awesome-icon :icon="['fas', buttonSymbol]" />
      </span>
      <span v-else>{{ buttonText }}</span>
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
        return [
          'point1',
          'point2',
          'checked',
          'fixed',
          'roll',
          'edit',
          'plus',
          'text'
        ].includes(value)
      }
    },
    buttonText: { type: String, default: '' },
    size: {
      type: String,
      default: 'normal'
    },
    buttonStyles: {
      type: Array,
      default() {
        return ['']
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  computed: {
    buttonClass() {
      return {
        'is-light':
          this.buttonType === 'point1' ||
          this.buttonType === 'edit' ||
          this.buttonStyles.includes('light'),
        'is-danger is-light':
          this.buttonType === 'point2' || this.buttonStyles.includes('danger'),
        'is-success':
          this.buttonType === 'checked' ||
          this.buttonType === 'plus' ||
          this.buttonStyles.includes('success'),
        'is-info':
          this.buttonType === 'fixed' || this.buttonStyles.includes('info'),
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
        roll: 'recycle',
        edit: 'edit',
        plus: 'plus'
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
