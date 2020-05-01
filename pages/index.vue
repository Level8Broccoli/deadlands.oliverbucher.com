<template>
  <div>
    <h2 class="subtitle">Allgemein</h2>
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
</template>

<script>
export default {
  computed: {
    name: {
      get() {
        return this.$store.state.charSave.name
      },
      set(value) {
        this.$store.commit('charSave/setName', value)
      }
    },
    notes: {
      get() {
        return this.$store.state.charSave.notes
      },
      set(value) {
        this.$store.commit('charSave/setNotes', value)
      }
    }
  },
  head() {
    return {
      title: this.$store.state.title
    }
  }
}
</script>
