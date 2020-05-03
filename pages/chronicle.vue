<template>
  <div>
    <h2>Erklärung:</h2>
    <p>
      Hier befindet sich die Chronik der aktuellen Spielrunde
      <em>(wird nicht gespeichert)</em>.
    </p>
    <br />
    <div class="tabs is-toggle is-fullwidth">
      <ul>
        <li :class="tab === 0 ? 'is-active' : ''">
          <a @click="tab = 0">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fas', 'user']" />
            </span>
            <span>Charakterstatus</span>
          </a>
        </li>
        <li :class="tab === 1 ? 'is-active' : ''">
          <a @click="tab = 1">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fas', 'chess-king']" />
            </span>
            <span>Pokerkarten</span>
          </a>
        </li>
        <li :class="tab === 2 ? 'is-active' : ''">
          <a @click="tab = 2">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fas', 'dice']" />
            </span>
            <span>Würfel</span>
          </a>
        </li>
      </ul>
    </div>
    <CharStats v-if="tab === 0" />
    <CardDeck v-if="tab === 1" />
    <DiceBag v-if="tab === 2" />
    <ChatForm />
    <div class="table-container">
      <table class="table is-striped is-hoverable is-fullwidth">
        <tr>
          <th></th>
          <th>
            <h1 class="subtitle">Chronik</h1>
          </th>
          <th>Wurf</th>
          <th>Wild Die (W6)</th>
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
          <font-awesome-icon :icon="['fas', wsSymbol]" />
        </small>
      </div>
    </div>
  </div>
</template>

<script>
import DiceBag from '~/components/chronicle/DiceBag'
import DiceRollResultEntry from '~/components/chronicle/DiceRollResultEntry'
import ChatForm from '~/components/chronicle/ChatForm'
import ChatEntry from '~/components/chronicle/ChatEntry'
import CharStats from '~/components/common/CharStats'
import CardDeck from '~/components/chronicle/CardDeck'
import CardShuffleEntry from '~/components/chronicle/CardShuffleEntry'
import CardDrawEntry from '~/components/chronicle/CardDrawEntry'

export default {
  components: {
    DiceBag,
    CardDrawEntry,
    DiceRollResultEntry,
    ChatForm,
    CardShuffleEntry,
    ChatEntry,
    CharStats,
    CardDeck
  },
  data() {
    return { tab: 0 }
  },
  computed: {
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
.custom-is-own-row {
  background: hsla(171, 100%, 41%, 0.2);
  background: linear-gradient(
    90deg,
    hsla(171, 100%, 41%, 0.2) 0%,
    hsl(0, 0%, 100%) 100%
  );
}
.custom-is-own-row-chat {
  background: hsla(48, 100%, 67%, 0.2);
  background: linear-gradient(
    90deg,
    hsla(48, 100%, 67%, 0.2) 0%,
    hsl(0, 0%, 100%) 100%
  );
}
</style>
