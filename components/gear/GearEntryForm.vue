<template>
  <tbody>
    <tr>
      <td>
        <div class="field">
          <label class="label">
            #
          </label>
          <div class="control">
            <input
              v-model="gearUpdated.count"
              class="input"
              type="number"
              min="0"
              :class="{ 'is-danger': errors.countError }"
            />
          </div>
          <p class="help">Setzte hier 0, um den Eintrag zu löschen.</p>
        </div>
      </td>
      <td colspan="2">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              v-model="gearUpdated.name"
              class="input"
              type="text"
              placeholder="Bezeichnung"
              :class="{ 'is-danger': errors.nameError }"
            />
          </div>
        </div>
      </td>
      <td>
        <div class="field">
          <label class="label">Stückpreis</label>
          <div class="control">
            <input v-model="gearUpdated.value" class="input" type="number" />
          </div>
        </div>
      </td>
      <td>
        <div class="field">
          <label class="label">Aktionen</label>
          <div class="field is-grouped">
            <div class="control">
              <GameButton button-type="checked" @button-click="saveGear" />
            </div>
            <div class="control">
              <GameButton button-type="point2" @button-click="exitForm" />
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
    }
  },
  computed: {
    gearUpdated() {
      return { ...this.gear }
    },
    errors() {
      return {
        countError: this.gearUpdated.count < 0,
        nameError: this.gearUpdated.name === ''
      }
    }
  },
  methods: {
    saveGear() {
      this.$emit('save-gear', this.gearUpdated)
      this.$emit('exit-form')
    },
    exitForm() {
      this.$emit('exit-form')
    }
  }
}
</script>
