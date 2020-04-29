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
      if (this.tag.type !== 'dynamic') {
        return ''
      }
      if (this.tag.depends === 'attribute') {
        const attributeListActive = this.$store.state.charSave.attributeList
        const attribute = attributeListActive.find((e) => e.id === this.tag.id)
        if (attribute && attribute.value >= this.tag.value) {
          return 'is-success is-light'
        }
      } else if (this.tag.depends === 'skill') {
        const skillListActive = this.$store.state.charSave.skillList
        const skill = skillListActive.find((e) => e.id === this.tag.id)
        if (skill && skill.value >= this.tag.value) {
          return 'is-success is-light'
        }
      } else if (this.tag.depends === 'talent') {
        const talentListActive = this.$store.state.charSave.talentList
        const talent = talentListActive.find((e) => e.id === this.tag.id)
        if (talent) {
          return 'is-success is-light'
        }
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
  }
}
</script>
