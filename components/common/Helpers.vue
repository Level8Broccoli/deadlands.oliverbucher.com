<template>
  <div>
    <div class="tabs is-toggle is-fullwidth">
      <ul>
        <li :class="tab.includes('characterStatus') ? 'is-active' : ''">
          <a @click="toggleOption('characterStatus')">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fad', 'user']" />
            </span>
            <span>Charakterstatus</span>
          </a>
        </li>
        <li :class="tab.includes('pokercards') ? 'is-active' : ''">
          <a @click="toggleOption('pokercards')">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fad', 'chess-king']" />
            </span>
            <span>Pokerkarten</span>
          </a>
        </li>
        <li :class="tab.includes('dice') ? 'is-active' : ''">
          <a @click="toggleOption('dice')">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fad', 'dice']" />
            </span>
            <span>Würfel</span>
          </a>
        </li>
        <li :class="tab.includes('favourites') ? 'is-active' : ''">
          <a @click="toggleOption('favourites')">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fad', 'star']" />
            </span>
            <span>Favoriten</span>
          </a>
        </li>
        <li :class="tab.includes('attributeShorthand') ? 'is-active' : ''">
          <a @click="toggleOption('attributeShorthand')">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fad', 'asterisk']" />
            </span>
            <span>Attribute</span>
          </a>
        </li>
        <li :class="tab.includes('skillsShorthand') ? 'is-active' : ''">
          <a @click="toggleOption('skillsShorthand')">
            <span class="icon is-small">
              <font-awesome-icon :icon="['fad', 'asterisk']" />
            </span>
            <span>Fertigkeiten</span>
          </a>
        </li>
      </ul>
    </div>
    <CharacterStats v-if="tab.includes('characterStatus')" />
    <CardDeck v-if="tab.includes('pokercards')" />
    <DiceBag v-if="tab.includes('dice')" />
    <FavouriteDicePools v-if="tab.includes('favourites')" />
    <AttributeShorthand v-if="tab.includes('attributeShorthand')" />
    <SkillShorthand v-if="tab.includes('skillsShorthand')" />
    <br />
  </div>
</template>

<script>
import DiceBag from '~/components/chronicle/DiceBag'
import CharacterStats from '~/components/common/CharacterStats'
import CardDeck from '~/components/chronicle/CardDeck'
import FavouriteDicePools from '~/components/chronicle/FavouriteDicePools'
import AttributeShorthand from '~/components/attributes/AttributeShorthand'
import SkillShorthand from '~/components/skills/SkillShorthand'

export default {
  name: 'Helpers',
  components: {
    DiceBag,
    CharacterStats,
    CardDeck,
    FavouriteDicePools,
    AttributeShorthand,
    SkillShorthand
  },
  computed: {
    tab() {
      return this.$store.state.charSave.options
    }
  },
  methods: {
    toggleOption(tabName) {
      this.$store.commit('charSave/toggleOption', tabName)
    }
  }
}
</script>
