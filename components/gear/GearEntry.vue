<template>
  <tbody>
    <tr>
      <td>{{ roundNumber(gearUpdated.count) }}</td>
      <td>
        <a v-if="gearUpdated.descr !== ''" @click="show = !show">
          {{ gearUpdated.name }}
        </a>
        <span v-else>
          {{ gearUpdated.name }}
        </span>
      </td>
      <td class="has-text-right">
        <span v-if="gearUpdated.count !== 1">
          {{ showTwoDecimals(gearUpdated.value) }} $/Stück
        </span>
      </td>
      <td class="has-text-right">{{ showTwoDecimals(totalValue) }} $</td>
      <td class="has-text-right">
        <GameButton
          button-icon="edit"
          button-style="is-light"
          @click.native="editGear"
        />
      </td>
    </tr>
    <tr v-if="show">
      <td></td>
      <td colspan="3">{{ gearUpdated.descr }}</td>
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
    return { show: false }
  },
  computed: {
    totalValue() {
      return this.gearUpdated.count * this.gearUpdated.value
    },
    gearUpdated() {
      return { ...this.gear }
    }
  },
  methods: {
    editGear() {
      this.$emit('edit-gear')
    },
    showTwoDecimals(num) {
      return (Math.round(num * 100) / 100).toFixed(2)
    },
    roundNumber(num) {
      return Math.round(num * 100) / 100
    }
  }
}
</script>
