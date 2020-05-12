<template>
  <tbody>
    <tr>
      <td>
        <GameButton :button-preset="buttonType" @click.native="clickTalent" />
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
          >
            {{ tag }}
          </span>
        </div>
      </td>
      <td>
        <div v-if="talent.req" class="tags">
          <GameTag v-for="(tag, index) in talent.req" :key="index" :tag="tag" />
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
import GameTag from '~/components/common/GameTag'

export default {
  name: 'TalentEntry',
  components: { GameButton, GameTag },
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
    clickTalent() {
      this.$store.commit('charSave/clickTalent', {
        id: this.talent.id
      })
    }
  }
}
</script>
