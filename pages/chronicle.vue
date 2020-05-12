<template>
  <div>
    <div class="tabs is-toggle is-fullwidth">
      <ul>
        <li :class="tab.includes('characterStatus') ? 'is-active' : ''">
          <a @click="toggleOption('characterStatus')">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fas', 'user']" />
            </span>
            <span>Charakterstatus</span>
          </a>
        </li>
        <li :class="tab.includes('pokercards') ? 'is-active' : ''">
          <a @click="toggleOption('pokercards')">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fas', 'chess-king']" />
            </span>
            <span>Pokerkarten</span>
          </a>
        </li>
        <li :class="tab.includes('dice') ? 'is-active' : ''">
          <a @click="toggleOption('dice')">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fas', 'dice']" />
            </span>
            <span>Würfel</span>
          </a>
        </li>
        <li :class="tab.includes('favourites') ? 'is-active' : ''">
          <a @click="toggleOption('favourites')">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fas', 'star']" />
            </span>
            <span>Favoriten</span>
          </a>
        </li>
      </ul>
    </div>
    <CharacterStats v-if="tab.includes('characterStatus')" />
    <CardDeck v-if="tab.includes('pokercards')" />
    <DiceBag v-if="tab.includes('dice')" />
    <FavouriteDicePools v-if="tab.includes('favourites')" />
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
import CharacterStats from '~/components/common/CharacterStats'
import CardDeck from '~/components/chronicle/CardDeck'
import CardShuffleEntry from '~/components/chronicle/CardShuffleEntry'
import CardDrawEntry from '~/components/chronicle/CardDrawEntry'
import FavouriteDicePools from '~/components/chronicle/FavouriteDicePools'

export default {
  components: {
    DiceBag,
    CardDrawEntry,
    DiceRollResultEntry,
    FavouriteDicePools,
    ChatForm,
    CardShuffleEntry,
    ChatEntry,
    CharacterStats,
    CardDeck
  },
  computed: {
    tab() {
      return this.$store.state.charSave.options
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
  methods: {
    toggleOption(tabName) {
      this.$store.commit('charSave/toggleOption', tabName)
    }
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
