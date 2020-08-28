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
      <label class="label">Kurzbeschreibung</label>
      <div class="control">
        <textarea v-model="introduction" rows="1" class="textarea"></textarea>
      </div>
    </div>
    <div class="field">
      <label class="label">Notizen</label>
      <div class="control">
        <textarea v-model="notes" rows="20" class="textarea"></textarea>
      </div>
    </div>
    <br />
    <h2 class="subtitle">Fertige Charaktere</h2>
    <p>
      <em
        >Achtung: Das Laden eines Charakters überschreibt die aktuellen Werte.
        Möchtest du zur Sicherheit den jetztigen Stand speichern, dann
        exportiere den Charakter im fortgeschrittenen Bereich unten.
      </em>
    </p>
    <div class="buttons">
      <div v-for="(char, index) in characters" :key="index">
        <GameButton
          :button-text="char.label"
          button-style="is-info is-light"
          button-icon="plus"
          @click.native="loadChar(char.data)"
        />
      </div>
    </div>
    <br />
    <h2 class="subtitle">
      Fortgeschritten
      <GameButton
        button-preset="add"
        @click.native="showAdvanced = !showAdvanced"
      />
    </h2>
    <div v-if="showAdvanced">
      <div class="field is-horizontal">
        <div class="field-body">
          <div class="field">
            <label class="label">Punkte für Attribute</label>
            <div class="control">
              <input v-model="attributePoints" type="text" class="input" />
            </div>
          </div>
          <div class="field">
            <label class="label">Punkte für Fertigkeiten</label>
            <div class="control">
              <input v-model="skillPoints" type="text" class="input" />
            </div>
          </div>
          <div class="field">
            <label class="label">Punkte für Handicaps</label>
            <div class="control">
              <input v-model="handicapPoints" type="text" class="input" />
            </div>
          </div>
          <div class="field">
            <label class="label">Punkte für Talente</label>
            <div class="control">
              <input v-model="talentPoints" type="text" class="input" />
            </div>
          </div>
          <div class="field">
            <label class="label">Punkte für Mächte</label>
            <div class="control">
              <input v-model="powerPoints" type="text" class="input" />
            </div>
          </div>
        </div>
      </div>
      <br />
      <CharacterImportExport />
    </div>
  </div>
</template>

<script>
import CharacterImportExport from '~/components/common/CharacterImportExport'
import GameButton from '~/components/common/GameButton'

export default {
  components: { CharacterImportExport, GameButton },
  data() {
    return { showAdvanced: false }
  },
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
    introduction: {
      get() {
        return this.$store.state.charSave.introduction
      },
      set(value) {
        this.$store.commit('charSave/setIntroduction', value)
      }
    },
    attributePoints: {
      get() {
        return this.$store.state.charSave.charPoints.attributes
      },
      set(value) {
        this.$store.commit('charSave/setCharPoints', {
          type: 'attributes',
          value
        })
      }
    },
    skillPoints: {
      get() {
        return this.$store.state.charSave.charPoints.skills
      },
      set(value) {
        this.$store.commit('charSave/setCharPoints', {
          type: 'skills',
          value
        })
      }
    },
    handicapPoints: {
      get() {
        return this.$store.state.charSave.charPoints.handicaps
      },
      set(value) {
        this.$store.commit('charSave/setCharPoints', {
          type: 'handicaps',
          value
        })
      }
    },
    talentPoints: {
      get() {
        return this.$store.state.charSave.charPoints.talents
      },
      set(value) {
        this.$store.commit('charSave/setCharPoints', {
          type: 'talents',
          value
        })
      }
    },
    powerPoints: {
      get() {
        return this.$store.state.charSave.charPoints.powers
      },
      set(value) {
        this.$store.commit('charSave/setCharPoints', {
          type: 'powers',
          value
        })
      }
    },
    characters() {
      return this.$store.state.characters.list
    }
  },
  methods: {
    loadChar(data) {
      this.$store.commit(
        'charSave/loadFromSave',
        JSON.parse(JSON.stringify(data))
      )
      this.$store.dispatch('charSave/uniqueId')
    }
  },
  head() {
    return {
      title: this.$store.state.title
    }
  }
}
</script>

<style>
.buttons > * + * {
  margin-left: 2rem;
}
</style>
