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
    <h2 class="subtitle">Fortgeschritten</h2>
    <div class="field is-horizontal">
      <div class="field-body">
        <div class="field">
          <label class="label">Attributspunkte</label>
          <div class="control">
            <input v-model="attributePoints" type="text" class="input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Fertigkeitspunkte</label>
          <div class="control">
            <input v-model="skillPoints" type="text" class="input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Handicappunkte</label>
          <div class="control">
            <input v-model="handicapPoints" type="text" class="input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Talentpunkte</label>
          <div class="control">
            <input v-model="talentPoints" type="text" class="input" />
          </div>
        </div>
        <div class="field">
          <label class="label">Machtpunkte</label>
          <div class="control">
            <input v-model="powerPoints" type="text" class="input" />
          </div>
        </div>
      </div>
    </div>
    <br />
    <CharacterImportExport />
  </div>
</template>

<script>
import CharacterImportExport from '~/components/common/CharacterImportExport'

export default {
  components: { CharacterImportExport },
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
    }
  },
  head() {
    return {
      title: this.$store.state.title
    }
  }
}
</script>
