<template>
  <div>
    <h1 class="title custom-title">{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderTitle',
  props: {
    title: { type: String, default: '' }
  }
}
</script>

<style>
.custom-title {
  margin-bottom: 1rem;
}
</style>
