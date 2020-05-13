<template>
  <nav class="level">
    <div class="level-left">
      <h1 class="title custom-title">
        {{ title }}<span v-if="characterName">, {{ characterName }}</span>
      </h1>
    </div>
    <div class="level-right">
      <a title="Layout wechseln" @click="toggleLayout">
        <span class="icon">
          <font-awesome-icon
            v-if="layout === 'default'"
            :icon="['fad', 'expand-arrows-alt']"
          />
          <font-awesome-icon v-else :icon="['fad', 'compress-arrows-alt']" />
        </span>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    title: { type: String, default: '' }
  },
  computed: {
    layout() {
      return this.$store.state.charSave.layout
    },
    characterName() {
      return this.$store.state.charSave.name
    }
  },
  methods: {
    toggleLayout() {
      this.$store.commit('charSave/toggleLayout')
    }
  }
}
</script>

<style>
.custom-title {
  margin-bottom: 1rem;
}
</style>
