<template>
  <div class="box">
    <div v-if="favourites.length === 0">
      <span class="is-italic">Noch keine Favoriten erstellt</span>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent custom-flex-flow">
        <FavouriteEntry
          v-for="(favourite, index) in favourites"
          :key="index"
          :favourite="favourite"
          @delete-favourite="deleteFavourite(index)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FavouriteEntry from '~/components/chronicle/FavouriteEntry'

export default {
  name: 'FavoriteDicePools',
  components: { FavouriteEntry },
  computed: {
    favourites() {
      return this.$store.state.charSave.favouriteDicePools
    }
  },
  methods: {
    deleteFavourite(index) {
      this.$store.commit('charSave/deleteFavourite', index)
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
