<template>
  <span class="tag" :class="tagClass">{{ tagLabel }}</span>
</template>

<script>
export default {
  name: 'GameTag',
  props: {
    tag: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    tagClass() {
      if (this.tag.type === 'text') {
        return ''
      } else if (this.tag.type === 'or') {
        const requirements = this.tag.elements
        for (let i = 0; i < requirements.length; i++) {
          if (this.isRequirementMet(requirements[i])) {
            return 'is-success is-light'
          }
        }
      } else if (this.isRequirementMet(this.tag)) {
        return 'is-success is-light'
      }
      return 'is-danger is-light'
    },
    tagLabel() {
      if (this.tag.label) {
        return this.tag.label
      } else if (this.tag.id && this.tag.value) {
        return `${this.tag.id} W${this.tag.value}+`
      } else {
        return 'FEHLENDES LABEL'
      }
    }
  },
  methods: {
    isRequirementMet({ depends, id, value }) {
      if (depends === 'attribute') {
        const attributeListActive = this.$store.state.charSave.attributeList
        const attribute = attributeListActive.find((e) => e.id === id)
        return !!attribute && attribute.value >= value
      } else if (depends === 'skill') {
        const skillListActive = this.$store.state.charSave.skillList
        const skill = skillListActive.find((e) => e.id === id)
        return !!skill && skill.value >= value
      } else if (depends === 'talent') {
        const talentListActive = this.$store.state.charSave.talentList
        const talent = talentListActive.find((e) => e.id === id)
        return !!talent
      }
      return false
    }
  }
}
</script>
