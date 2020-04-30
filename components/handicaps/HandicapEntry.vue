<template>
  <tbody>
    <tr>
      <td>
        <a @click="show = !show">{{ handicap.name }}</a>
      </td>
      <td>
        <div v-if="handicap.tags" class="tags">
          <span
            v-for="tag in handicap.tags"
            :key="tag"
            class="tag"
            :class="tag === 'Deadlands' ? 'is-danger is-light' : ''"
            >{{ tag }}</span
          >
        </div>
      </td>
      <td>
        <GameButton
          v-if="handicap.points.includes(1)"
          :button-type="buttonType(1)"
          @button-click="clickHandicap(1)"
        />
      </td>
      <td>
        <GameButton
          v-if="handicap.points.includes(2)"
          :button-type="buttonType(2)"
          @button-click="clickHandicap(2)"
        />
      </td>
    </tr>
    <tr v-if="show">
      <td colspan="4">{{ handicap.descr }}</td>
    </tr>
  </tbody>
</template>

<script>
import GameButton from '~/components/common/GameButton'

export default {
  name: 'HandicapEntry',
  components: { GameButton },
  props: {
    handicap: {
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
    currentValue() {
      const list = this.$store.state.charSave.handicapList
      const handicapSaved = list.find((e) => e.id === this.handicap.id)
      if (typeof handicapSaved !== 'undefined') {
        return handicapSaved.value
      }
      return 0
    }
  },
  methods: {
    buttonType(value) {
      if (this.currentValue === value) {
        return 'checked'
      } else if (value === 1) {
        return 'point1'
      } else {
        return 'point2'
      }
    },
    clickHandicap(value) {
      this.$store.commit('charSave/clickHandicap', {
        id: this.handicap.id,
        value
      })
    }
  }
}
</script>
