<template>
  <div class="hero">
    <div class="hero-body">
      <div :class="{ container: layout === 'default' }">
        <NuxtLink to="/">
          <img src="~/assets/images/deadlands_logo.png" alt="Deadlands Logo" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      return this.$store.state.charSave.layout
    }
  }
}
</script>
