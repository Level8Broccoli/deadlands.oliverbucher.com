<template>
  <div class="message is-dark">
    <div class="message-header">
      <p>
        Übersicht
        <span></span>
      </p>
    </div>
    <div class="message-body">
      <div class="field is-grouped is-grouped-multiline">
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-dark">Parade/Zielwert (Kämpfen)</span>
            <span class="tag">{{ 2 + fight / 2 }}</span>
          </div>
        </div>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-dark">Robustheit (Konstitution)</span>
            <span class="tag">{{ 2 + vigor / 2 }} + Panzerung</span>
          </div>
        </div>
        <div class="control">
          <div class="tags has-addons">
            <span class="tag is-dark">Kapital</span>
            <span class="tag">{{ totalValue }}$</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharacterOverview',
  computed: {
    fight() {
      const savedEntry = this.$store.state.charSave.skillList.find(
        (e) => e.id === 'Kaempfen'
      )
      return savedEntry ? savedEntry.value : 0
    },
    vigor() {
      const savedEntry = this.$store.state.charSave.attributeList.find(
        (e) => e.id === 'Konstitution'
      )
      return savedEntry ? savedEntry.value : 4
    },
    totalValue() {
      return this.$store.getters['charSave/getGearTotal'] * -1
    }
  }
}
</script>
