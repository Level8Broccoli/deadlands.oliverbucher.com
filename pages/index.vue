<template>
  <div>
    <h2 class="subtitle">Allgemein</h2>
    <CharStats />
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
    
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label class="label">Machtpunkte AKTUELL</label>
          <div class="control">
            <input v-model="powerPointsCurrent" type="text" class="input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Machtpunkte Maximum</label>
          <div class="control">
            <input v-model="powerPointsMax" type="text" class="input" />
          </div>
        </div>
      </div>
    </div>
    
    <div class="field">
      <label class="label">Machtpunkte Maximum</label>
      <div class="control">
        <input v-model="powerPointsMax" type="text" class="input" />
      </div>
    </div>
  </div>
</template>

<script>
import CharStats from '~/components/common/CharStats'

export default {
  components: { CharStats },
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
    },
    powerPointsMax: {
      get() {
        return this.$store.state.charSave.powerPointsMax
      },
      set(value) {
        this.$store.commit('charSave/setPowerPointsMax', value)
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
