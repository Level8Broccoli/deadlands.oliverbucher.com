<template>
  <div>
    <Helpers v-if="layout === 'default'" />
    <ChatForm />
    <div class="table-container">
      <table class="table is-striped is-hoverable is-fullwidth">
        <tr>
          <th></th>
          <th>
            <h1 class="subtitle">Chronik</h1>
          </th>
          <th>Wurf</th>
          <th>
            <font-awesome-icon :icon="['fad', 'dice-d6']" />
            Wild Die
          </th>
          <th>Modifikationen</th>
          <th>Ergebnis</th>
          <th></th>
        </tr>
        <tbody
          v-for="(entry, index) in chronicleList"
          :key="index"
          :entry="entry"
        >
          <DiceRollResultEntry
            v-if="entry.meta.type === 'diceRoll'"
            :entry="entry"
          />
          <ChatEntry
            v-else-if="entry.meta.type === 'chatEntry'"
            :entry="entry"
          />
          <CardShuffleEntry
            v-else-if="entry.meta.type === 'shuffleDeck'"
            :entry="entry"
          />
          <CardDrawEntry
            v-else-if="entry.meta.type === 'drawCards'"
            :entry="entry"
          />
        </tbody>
        <tr v-if="chronicleList.length === 0">
          <td></td>
          <td colspan="6">
            <span class="is-italic">Chronik leer</span>
          </td>
        </tr>
      </table>

      <div class="has-text-right">
        <small>
          {{ wsState }}
          <font-awesome-icon :icon="['fad', wsSymbol]" />
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import Helpers from '~/components/common/Helpers'
import DiceRollResultEntry from '~/components/chronicle/DiceRollResultEntry'
import ChatForm from '~/components/chronicle/ChatForm'
import ChatEntry from '~/components/chronicle/ChatEntry'
import CardShuffleEntry from '~/components/chronicle/CardShuffleEntry'
import CardDrawEntry from '~/components/chronicle/CardDrawEntry'

export default {
  components: {
    CardDrawEntry,
    Helpers,
    DiceRollResultEntry,
    ChatForm,
    CardShuffleEntry,
    ChatEntry
  },
  computed: {
    layout() {
      return this.$store.state.charSave.layout
    },
    chronicleList() {
      return this.$store.getters['chronicle/getList']
    },
    wsState() {
      const wsState = this.$store.state.chronicle.wsConnection
      return wsState ? 'verbunden' : 'Verbindung geschlossen'
    },
    wsSymbol() {
      const wsState = this.$store.state.chronicle.wsConnection
      return wsState ? 'signal' : 'ban'
    }
  },
  mounted() {
    this.$store.commit('chronicle/setShowLastRoll', false)
  },
  head() {
    return {
      title: 'Chronik | ' + this.$store.state.title
    }
  }
}
</script>

<style>
.custom-is-my-last-entry {
  background: hsla(348, 100%, 61%, 0.8);
  background: linear-gradient(
    90deg,
    hsla(348, 100%, 61%, 0.8) 0%,
    hsl(0, 0%, 100%) 15%
  );
}
.custom-is-own-row-dice {
  background: hsla(171, 100%, 41%, 0.2);
  background: linear-gradient(
    90deg,
    hsla(171, 100%, 41%, 0.2) 0%,
    hsl(0, 0%, 100%) 15%
  );
}
.custom-is-own-row-cards {
  background: hsla(0, 0%, 14%, 0.2);
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 14%, 0.2) 0%,
    hsl(0, 0%, 100%) 15%
  );
}
.custom-is-own-row-chat {
  background: hsla(48, 100%, 67%, 0.2);
  background: linear-gradient(
    90deg,
    hsla(48, 100%, 67%, 0.2) 0%,
    hsl(0, 0%, 100%) 15%
  );
}
</style>
