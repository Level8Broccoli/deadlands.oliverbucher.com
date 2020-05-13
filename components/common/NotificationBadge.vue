<template>
  <span class="tag" :class="badgeClass">
    {{ badgeCount }}
    <span v-if="badgeIcon" class="icon is-small">
      <font-awesome-icon :icon="['fad', badgeIcon]" />
    </span>
  </span>
</template>

<script>
export default {
  name: 'NotificationBadge',
  props: {
    badgeType: {
      type: String,
      default: 'light'
    },
    badgeValue: { type: Number, default: null },
    badgeIcon: { type: String, default: null }
  },
  computed: {
    badgeClass() {
      return {
        'is-light': this.badgeType === 'light',
        'is-danger': this.badgeType === 'danger',
        'is-success': this.badgeType === 'success'
      }
    },
    badgeCount() {
      return this.badgeValue ? this.badgeValue : ''
    }
  }
}
</script>
