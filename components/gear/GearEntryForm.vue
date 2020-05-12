<template>
  <tbody>
    <tr>
      <td>
        <div class="field">
          <label class="label">
            Anzahl *
          </label>
          <div class="control">
            <input
              v-model="gearUpdated.count"
              class="input"
              type="number"
              min="0"
            />
          </div>
          <p class="help">
            * Pflichtfeld. Setzte hier 0, um den Eintrag zu löschen.
          </p>
        </div>
      </td>
      <td>
        <div class="field">
          <label class="label">Name *</label>
          <div class="control">
            <input
              v-model="gearUpdated.name"
              class="input"
              type="text"
              placeholder="Bezeichnung"
            />
          </div>
          <p class="help">
            * Pflichtfeld
          </p>
        </div>
      </td>
      <td colspan="2">
        <div class="field">
          <label class="label">Stückpreis</label>
          <div class="control">
            <input v-model="gearUpdated.value" class="input" type="number" />
          </div>
        </div>
      </td>
      <td>
        <div class="field">
          <label class="label has-text-right">Aktionen</label>
          <div class="buttons is-right">
            <div class="control">
              <GameButton
                button-icon="save"
                button-style="is-success"
                @click.native="saveGear"
              />
            </div>
            <div v-if="gearListCount > 0" class="control">
              <GameButton
                button-icon="compress-arrows-alt"
                @click.native="exitForm"
              />
            </div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <td></td>
      <td colspan="3">
        <div class="field">
          <div class="control">
            <textarea
              v-model="gearUpdated.descr"
              class="textarea"
              placeholder="Beschreibung, Details ..."
            ></textarea>
          </div>
        </div>
      </td>
      <td></td>
    </tr>
  </tbody>
</template>

<script>
import GameButton from '~/components/common/GameButton'

export default {
  name: 'GearEntryForm',
  components: { GameButton },
  props: {
    gear: {
      type: Object,
      default() {
        return {
          count: 1,
          name: '',
          descr: '',
          value: 0
        }
      }
    },
    gearListCount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    gearUpdated() {
      return { ...this.gear }
    }
  },
  methods: {
    saveGear() {
      if ((this.gearUpdated.count >= 0, this.gearUpdated.name.length !== 0)) {
        this.$emit('save-gear', this.gearUpdated)
        this.$emit('exit-form')
      }
    },
    exitForm() {
      this.$emit('exit-form')
    }
  }
}
</script>
