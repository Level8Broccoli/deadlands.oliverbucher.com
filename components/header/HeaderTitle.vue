<template>
  <div>
    <h1 class="title custom-title">
      {{ title }}<span v-if="characterName">, {{ characterName }}</span>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    title: { type: String, default: '' }
  },
  computed: {
    characterName() {
      return this.$store.state.charSave.name
    }
  }
}
</script>

<style>
.custom-title {
  margin-bottom: 1rem;
}
</style>
