<template>
  <tbody>
    <tr>
      <td>
        <GameButton button-type="roll" />
        <button
          title="Wurf wiederholen"
          class="button is-light is-info"
          @click="reroll(dice)"
        >
          &#9850;
        </button>
      </td>
      <td>
        {{ dice.comment }}
        <div class="has-text-weight-bold">
          <small>{{ dice.timestamp }}</small>
        </div>
      </td>
      <td>
        <div class="buttons">
          <button
            v-for="die in dice.rollNormal"
            :key="die"
            class="button is-light"
            :class="renderDice(die.rolled, die.dice)"
          >
            {{ die.rolled }}
          </button>
        </div>
      </td>
      <td>
        <div class="buttons">
          <button
            v-for="die in dice.rollWild"
            :key="die"
            class="button is-light"
            :class="renderDice(die.rolled, die.dice)"
          >
            {{ die.rolled }}
          </button>
        </div>
      </td>
      <td>
        <div class="buttons">
          <button
            v-for="mod in dice.modifications"
            :key="mod"
            class="button is-light"
            :class="mod.value < 0 ? 'is-danger' : 'is-success'"
          >
            {{ mod.name }} {{ mod.value }}
          </button>
        </div>
      </td>
      <td>
        <button class="button" :class="renderResult(dice.result)">
          {{ dice.result.value }}
        </button>
      </td>
      <td>
        <div v-if="dice.result.success" class="has-text-success">Erfolg!</div>
        <div v-else-if="dice.result.critFailure" class="has-text-danger">
          Snake Eyes!
        </div>
        <div v-else class="has-text-warning">Fehlschlag</div>
        <div v-if="dice.result.raise === 1" class="has-text-info">
          1 Steigerung
        </div>
        <div v-if="dice.result.raise > 1" class="has-text-info">
          {{ dice.result.raise }} Steigerungen
        </div>
      </td>
    </tr>
  </tbody>
</template>

<script>
import GameButton from '~/components/common/GameButton'
export default {
  name: 'ChronicleEntry',
  components: { GameButton },
  props: {
    dice: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
