<template>
  <tbody>
    <tr>
      <td>
        <GameButton
          :button-type="buttonType(talent)"
          @button-click="clickTalent(talent)"
        />
      </td>
      <td>
        <a @click="show = !show">{{ talent.name }}</a>
      </td>
      <td>
        <div v-if="talent.tags" class="tags">
          <span
            v-for="tag in talent.tags"
            :key="tag"
            class="tag"
            :class="
              tag === 'Deadlands' ? 'is-danger is-light' : 'is-warning is-light'
            "
            >{{ tag }}</span
          >
        </div>
      </td>
      <td>
        <div v-if="talent.req" class="tags">
          <span
            v-for="tag in talent.req"
            :key="tag"
            class="tag"
            :class="tag.includes('+') ? 'is-info is-light' : ''"
            >{{ tag }}</span
          >
        </div>
      </td>
    </tr>
    <tr v-if="show">
      <td colspan="4">{{ talent.descr }}</td>
    </tr>
  </tbody>
</template>

<script>
import GameButton from '~/components/common/GameButton'

export default {
  name: 'TalentEntry',
  components: { GameButton },
  props: {
    talent: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return { show: false }
  },
  computed: {
    isActive() {
      const list = this.$store.state.charSave.talentList
      const talentSaved = list.find((e) => e.id === this.talent.id)
      return !!talentSaved
    }
  },
  methods: {
    buttonType(talent) {
      if (this.isActive) {
        return 'checked'
      } else {
        return 'point1'
      }
    },
    clickTalent(talent) {
      this.$store.commit('charSave/clickTalent', {
        id: talent.id
      })
    }
  }
}
</script>
