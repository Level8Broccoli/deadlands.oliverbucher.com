<template>
  <tbody>
    <tr>
      <td>
        <GameButton :button-preset="buttonType" @click.native="clickPower" />
      </td>
      <td>
        <a @click="show = !show">{{ power.name }}</a>
      </td>
      <td>{{ power.summary }}</td>
    </tr>
    <tr v-if="show">
      <td></td>
      <td colspan="2">
        <p>
          <strong>Machtpunkte:</strong> {{ power.powerPoints }} /
          <strong>Reichweite:</strong> {{ power.range }} /
          <strong>Wirkungsdauer:</strong> {{ power.duration }}
        </p>
        <br />
        <p>
          {{ power.descr }}
        </p>
        <div v-if="power.modifications">
          <div
            v-for="(mod, index) in power.modifications"
            :key="index"
            class="box"
          >
            <h3>
              {{ mod.name }}
            </h3>
            <p>
              {{ mod.descr }}
            </p>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
import GameButton from '~/components/common/GameButton'

export default {
  name: 'PowerEntry',
  components: { GameButton },
  props: {
    power: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      show: false
    }
  },
  computed: {
    isActive() {
      const list = this.$store.state.charSave.powerList
      const powerSaved = list.find((e) => e.id === this.power.id)
      return !!powerSaved
    },
    buttonType() {
      if (this.isActive) {
        return 'checked'
      } else {
        return 'unchecked1'
      }
    }
  },
  methods: {
    clickPower() {
      this.$store.commit('charSave/clickPower', {
        id: this.power.id
      })
    }
  }
}
</script>
