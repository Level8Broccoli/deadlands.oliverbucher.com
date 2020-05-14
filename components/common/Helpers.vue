<template>
  <div>
    <div class="buttons">
      <GameButton
        :button-style="
          tab.includes('characterStatus')
            ? 'is-info custom-button-margin'
            : 'custom-button-margin'
        "
        button-icon="user"
        button-text="Charakterstatus"
        @click.native="toggleOption('characterStatus')"
      />
      <GameButton
        :button-style="
          tab.includes('pokercards')
            ? 'is-info custom-button-margin'
            : 'custom-button-margin'
        "
        button-icon="chess-king"
        button-text="Pokerkarten"
        @click.native="toggleOption('pokercards')"
      />
      <GameButton
        :button-style="
          tab.includes('dice')
            ? 'is-info custom-button-margin'
            : 'custom-button-margin'
        "
        button-icon="dice"
        button-text="Würfel"
        @click.native="toggleOption('dice')"
      />
      <GameButton
        :button-style="
          tab.includes('favourites')
            ? 'is-info custom-button-margin'
            : 'custom-button-margin'
        "
        button-icon="star"
        button-text="Favoriten"
        @click.native="toggleOption('favourites')"
      />
      <GameButton
        :button-style="
          tab.includes('attributeShorthand')
            ? 'is-info custom-button-margin'
            : 'custom-button-margin'
        "
        button-icon="asterisk"
        button-text="Attribute"
        @click.native="toggleOption('attributeShorthand')"
      />
      <GameButton
        :button-style="
          tab.includes('skillsShorthand')
            ? 'is-info custom-button-margin'
            : 'custom-button-margin'
        "
        button-icon="asterisk"
        button-text="Fertigkeiten"
        @click.native="toggleOption('skillsShorthand')"
      />
      <GameButton
        :button-style="
          tab.includes('fightTracker')
            ? 'is-info custom-button-margin'
            : 'custom-button-margin'
        "
        button-icon="swords"
        button-text="Kampf"
        @click.native="toggleOption('fightTracker')"
      />
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
import GameButton from '~/components/common/GameButton'
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
    GameButton,
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

<style>
.custom-button-margin {
  margin-right: 0.5rem;
}
</style>
