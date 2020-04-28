<template>
  <div>
    <div>
      <div>
        <h2 class="subtitle">Allgemein</h2>
        <GameButton button-type="roll" />
        <div class="field">
          <label class="label">Charaktername</label>
          <div class="control">
            <input v-model="name" type="text" class="input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Notizen</label>
          <div class="control">
            <textarea v-model="notes" rows="20" class="textarea"></textarea>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GameButton from '~/components/common/GameButton'

export default {
  components: { GameButton },
  computed: {
    name: {
      get() {
        return this.$store.state.charSave.name
      },
      set(value) {
        this.$store.commit('setName', value)
      }
    },
    notes: {
      get() {
        return this.$store.state.charSave.notes
      },
      set(value) {
        this.$store.commit('setNotes', value)
      }
    }
  }
}
</script>
