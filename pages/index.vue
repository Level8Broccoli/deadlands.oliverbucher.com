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
          <label class="label">Fate Chips</label>
          <div class="control">
            <button class="button" @click="drawChip">Ziehen</button>
          </div>
        </div>
        <div class="field">
          <label class="label">Weiss</label>
          <div class="control">
            <input v-model="chipsWhite" type="text" class="input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Rot</label>
          <div class="control">
            <input v-model="chipsRed" type="text" class="input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Blau</label>
          <div class="control">
            <input v-model="chipsBlue" type="text" class="input" />
          </div>
        </div>
      </div>
    </div>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label class="label">Machtpunkte Aktuell</label>
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
    powerPointsCurrent: {
      get() {
        return this.$store.state.charSave.powerPointsCurrent
      },
      set(value) {
        this.$store.commit('charSave/setPowerPointsCurrent', value)
      }
    },
    powerPointsMax: {
      get() {
        return this.$store.state.charSave.powerPointsMax
      },
      set(value) {
        this.$store.commit('charSave/setPowerPointsMax', value)
      }
    },
    chipsWhite: {
      get() {
        const chips = this.$store.state.charSave.fateChips
        if (chips[white]) {
          return chips[white]
        } else {
          return 0
        }
      },
      set(value) {
        this.$store.commit('charSave/setFateChips', {type: 'white', value})
      }
    },
    chipsRed: {
      get() {
        const chips = this.$store.state.charSave.fateChips
        if (chips[red]) {
          return chips[red]
        } else {
          return 0
        }
      },
      set(value) {
        this.$store.commit('charSave/setFateChips', {type: 'red', value})
      }
    },
    chipsBlue: {
      get() {
        const chips = this.$store.state.charSave.fateChips
        if (chips[blue]) {
          return chips[blue]
        } else {
          return 0
        }
      },
      set(value) {
        this.$store.commit('charSave/setFateChips', {type: 'blue', value})
      }
    }
  },
  methods: {
    drawChip() {
      const randomNumber = Math.random() * 100
      if (randomNumber < 10) {
        this.chipsBlue++
      } else if (randomNumber < 40) {
        this.chipsRot++
      } else {
        this.chipsWhite++
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
