<template>
  <div>
    <GameButton
      v-if="buttonPreset === 'defaultValue'"
      button-icon="check-double"
      button-style="is-info"
      button-title="Startwert"
    />

    <GameButton
      v-if="buttonPreset === 'checked'"
      button-icon="check"
      button-style="is-success"
      button-title="Ausgewählt"
    />

    <GameButton
      v-if="buttonPreset === 'unchecked1'"
      button-icon="times"
      button-style="is-light"
      button-title="Kostet 1 Punkt"
    />

    <GameButton
      v-if="buttonPreset === 'unchecked2'"
      button-icon="times"
      button-style="is-light is-danger"
      button-title="Kostet 2 Punkte"
    />

    <GameButton
      v-if="buttonPreset === 'more'"
      button-icon="ellipsis-v"
      button-style="is-light"
      button-title="In Würfelhilfe öffnen"
    />

    <GameButton
      v-if="buttonPreset === 'delete'"
      button-icon="trash"
      button-style="is-danger"
      button-title="Eintrag löschen"
    />

    <GameButton
      v-if="buttonPreset === 'add'"
      button-icon="plus"
      button-style="is-success"
      button-title="Hinzufügen"
    />

    <GameButton
      v-if="buttonPreset === 'rollWithoutLabel'"
      :button-style="
        modificationTotal === 0
          ? 'is-light is-link'
          : modificationTotal < 0
          ? 'is-light is-danger'
          : 'is-light is-success'
      "
      :dice-pool="dicePool"
    />

    <GameButton
      v-if="buttonPreset === 'rollWithLabel'"
      :button-style="
        modificationTotal === 0
          ? 'is-light is-link'
          : modificationTotal < 0
          ? 'is-light is-danger'
          : 'is-light is-success'
      "
      :button-text="dicePool.comment"
      :dice-pool="dicePool"
    />

    <button
      v-if="buttonPreset === ''"
      class="button"
      :class="buttonStyle"
      :title="buttonTitle"
    >
      <span v-if="dicePool">
        <span v-for="(die, index) in dicePool.dice" :key="index">
          <span
            v-for="count in die.count"
            :key="count"
            class="custom-space-between"
          >
            <font-awesome-icon :icon="['fad', 'dice-d' + die.type]" />
          </span>
        </span>
      </span>
      <span v-if="buttonIcon" class="icon">
        <font-awesome-icon
          v-if="buttonIcon === 'ellipsis-v'"
          :icon="['fas', buttonIcon]"
        />
        <font-awesome-icon v-else :icon="['fad', buttonIcon]" />
      </span>

      <span v-if="buttonText" :class="{ 'custom-button-text': !!dicePool }">
        {{ buttonText }}
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'GameButton',
  props: {
    buttonPreset: {
      type: String,
      default: ''
    },
    buttonText: { type: String, default: null },
    buttonIcon: { type: String, default: null },
    buttonStyle: { type: String, default: null },
    buttonTitle: { type: String, default: null },
    dicePool: {
      type: Object,
      default() {
        return null
      }
    }
  },
  computed: {
    modificationTotal() {
      if (this.dicePool && this.dicePool.modifications) {
        return this.dicePool.modifications.reduce(
          (acc, curr) => (acc += curr.value),
          0
        )
      } else {
        return 0
      }
    }
  }
}
</script>

<style>
.custom-button-text {
  padding-left: 1rem;
}
.custom-space-between {
  margin: 0 2px;
}
</style>
