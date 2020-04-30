<template>
  <div class="tabs is-fullwidth">
    <ul>
      <li
        v-for="tab in tabList"
        :key="tab.id"
        :class="tab.link === $route.path ? 'is-active' : ''"
      >
        <NuxtLink :to="tab.link">
          {{ tab.name }}
          &nbsp;
          <NotificationBadge
            v-if="showBadge(tab)"
            :badge-type="badgeType(tab)"
            :badge-value="badgeValue(tab)"
            :badge-icon="badgeIcon(tab)"
          />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
import NotificationBadge from '~/components/common/NotificationBadge'

export default {
  name: 'NavTabs',
  components: { NotificationBadge },
  computed: {
    tabList() {
      return this.$store.state.tabList
    },
    attributePoints() {
      const attributeListActive = this.$store.state.charSave.attributeList
      let total = 0
      for (let i = 0; i < attributeListActive.length; i++) {
        const attribute = attributeListActive[i]
        total += attribute.value - 4
      }
      return total / 2
    },
    skillPoints() {
      const skillListActive = this.$store.state.charSave.skillList
      const attributeListActive = this.$store.state.charSave.attributeList
      const skillList = this.$store.getters['skills/getList']

      let total = 0

      for (let i = 0; i < skillListActive.length; i++) {
        const skillValue = skillListActive[i].value
        const skill = skillList.find((e) => e.id === skillListActive[i].id)
        const attribute = attributeListActive.find((e) => e.id === skill.attr)
        const attributeValue = attribute ? attribute.value : 4

        let singleCost = 0
        let doubleCost = 0

        if (attributeValue >= skillValue) {
          singleCost = skillValue
        } else {
          singleCost = attributeValue
          doubleCost = skillValue - attributeValue
        }

        if (skill.defaultValue) {
          singleCost -= skill.defaultValue
        } else {
          singleCost -= 2
        }

        total += (singleCost + 2 * doubleCost) / 2
      }
      return total
    },
    handicapPoints() {
      const handicapListActive = this.$store.state.charSave.handicapList
      let total = 0
      for (let i = 0; i < handicapListActive.length; i++) {
        const handicap = handicapListActive[i]
        total += handicap.value
      }
      return total
    },
    talentPoints() {
      const talentListActive = this.$store.state.charSave.talentList
      return talentListActive.length
    }
  },
  methods: {
    showBadge(tab) {
      return (
        (this.badgeValue(tab) && this.badgeValue(tab) !== 0) || tab.notification
      )
    },
    badgeType(tab) {
      if (tab.points) {
        return 'danger'
      } else if (tab.notification) {
        return 'success'
      } else {
        return ''
      }
    },
    badgeValue(tab) {
      if (tab.id === 'attributes') {
        return tab.points - this.attributePoints
      } else if (tab.id === 'skills') {
        return tab.points - this.skillPoints
      } else if (tab.id === 'handicaps') {
        return tab.points - this.handicapPoints
      } else if (tab.id === 'talents') {
        return tab.points - this.talentPoints
      } else {
        return null
      }
    },
    badgeIcon(tab) {
      if (tab.notification) {
        return 'bell'
      } else {
        return ''
      }
    }
  }
}
</script>
