<template>
  <tbody>
    <tr v-if="modeUpdated === 'read' && gearUpdated.count !== '0'">
      <td>{{ gearUpdated.count }}</td>
      <td>
        <a @click="show = !show">{{ gearUpdated.name }}</a>
      </td>
      <td>{{ gearUpdated.value }}</td>
      <td></td>
      <td>
        <GameButton button-type="edit" @button-click="modeUpdated = 'edit'" />
      </td>
    </tr>
    <tr v-if="modeUpdated === 'read' && show && gearUpdated.count !== '0'">
      <td></td>
      <td colspan="2">{{ gearUpdated.descr }}</td>
      <td></td>
    </tr>
    <tr v-if="modeUpdated !== 'read'">
      <td>
        <div class="field">
          <label class="label">Anzahl</label>
          <div class="control">
            <input
              v-model="gearUpdated.count"
              class="input"
              type="number"
              min="0"
              :class="{ 'is-danger': errors.countError }"
            />
          </div>
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
              <GameButton button-type="checked" @button-click="addToList" />
            </div>
            <div class="control">
              <GameButton button-type="point2" @button-click="exitEdit" />
            </div>
          </div>
        </div>
      </td>
    </tr>
    <tr v-if="modeUpdated !== 'read'">
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
  name: 'GearEntry',
  components: { GameButton },
  props: {
    mode: { type: String, default: 'read' },
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
  data() {
    return {
      show: false,
      modeUpdated: this.mode,
      gearUpdated: { ...this.gear }
    }
  },
  computed: {
    errors() {
      return {
        countError: this.gearUpdated.count < 0,
        nameError: this.gearUpdated.name === ''
      }
    }
  },
  methods: {
    addToList() {
      if (!this.errors.countError && !this.errors.nameError) {
        this.$store.commit('charSave/saveGear', this.gearUpdated)
        this.modeUpdated = 'read'
      }
    },
    exitEdit() {
      if (!this.gearUpdated.id) {
        this.$emit('close-form')
      }
      this.modeUpdated = 'read'
    }
  }
}
</script>
