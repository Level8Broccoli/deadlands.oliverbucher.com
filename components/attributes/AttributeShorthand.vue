<template>
  <div class="box">
    <div class="tile is-ancestor">
      <div class="tile is-parent custom-flex-flow">
        <!-- <FavouriteEntry
          v-for="(attribute, index) in attributeList"
          :key="index"
          :attribute="attribute"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
// import FavouriteEntry from '~/components/chronicle/FavouriteEntry'

export default {
  name: 'AttributeShorthand',
  // components: { FavouriteEntry },
  computed: {
    attributeList() {
      return this.$store.getters['attributes/getList']
    }
  }
}
</script>

<style scoped>
.custom-flex-flow {
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
