<template>
  <div>
    <DiceModal />
    <HeaderLogo />
    <section class="section">
      <div :class="{ container: layout === 'default' }">
        <div class="custom-container">
          <HeaderTitle title="Willkommen im Weird West" />
          <CharacterOverview />
          <NavTabs />
          <div class="columns is-desktop">
            <div class="column">
              <nuxt />
            </div>
            <div v-if="layout !== 'default'" class="column">
              <AttributeShorthand />
              <SkillShorthand />
            </div>
          </div>
          <LastRoll v-if="showLastRoll" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HeaderLogo from '~/components/header/HeaderLogo'
import HeaderTitle from '~/components/header/HeaderTitle'
import CharacterOverview from '~/components/common/CharacterOverview'
import NavTabs from '~/components/header/NavTabs'
import LastRoll from '~/components/common/LastRoll'
import DiceModal from '~/components/common/DiceModal'
import AttributeShorthand from '~/components/attributes/AttributeShorthand'
import SkillShorthand from '~/components/skills/SkillShorthand'

export default {
  components: {
    HeaderLogo,
    HeaderTitle,
    CharacterOverview,
    NavTabs,
    LastRoll,
    DiceModal,
    AttributeShorthand,
    SkillShorthand
  },
  computed: {
    layout() {
      return this.$store.state.charSave.layout
    },
    showLastRoll() {
      const lastRoll = this.$store.getters['chronicle/getLastRoll']
      const showLastRoll = this.$store.state.chronicle.showLastRoll
      return showLastRoll && typeof lastRoll !== 'undefined'
    },
    ...mapGetters({ charSave: 'charSave/charSave' })
  },
  watch: {
    charSave: {
      handler(charSave) {
        const parsed = JSON.stringify(this.charSave)
        localStorage.setItem('charSaveV2', parsed)
      },
      deep: true
    }
  },
  mounted() {
    const getSaveFromLocalStorge = () => {
      try {
        const charSave = JSON.parse(localStorage.getItem('charSaveV2'))
        this.$store.commit('charSave/loadFromSave', charSave)
      } catch (error) {
        console.error(error)
        console.error(localStorage.getItem('charSaveV2'))
      }
    }
    getSaveFromLocalStorge()

    this.$store.dispatch('charSave/uniqueId')
  }
}
</script>

<style>
:root {
  --clr-background: rgba(246, 196, 131, 0.867);
  --clr-1: #8c0712;
  --clr-2: #8c6927;
  --clr-3: rgb(228, 214, 188);
}

html {
  height: 100%;
}

body {
  background: url(~assets/images/bg.jpg) no-repeat center center fixed;
  background-size: cover;
  min-height: 100%;
  font-family: Oldenburg;
}

h1,
h2,
h3,
h4,
h5,
h6,
button,
.file-label {
  font-family: 'Oleo Script';
}

.custom-container {
  border: 1em solid transparent;
  border-radius: 1rem;
  background: var(--clr-background);
  margin-bottom: 20rem;
}

.custom-container-right {
  color: var(--clr-3);
}

.custom-container-right h3 {
  color: var(--clr-3);
}

.custom-number {
  color: var(--clr-2);
}

.custom-roll-popup {
  position: fixed;
  bottom: 2rem;
  left: 0;
  right: 0;
  padding: 1em;
}

.custom-roll-popup .message {
  -webkit-box-shadow: 0px 0px 16px 5px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 0px 16px 5px rgba(0, 0, 0, 0.3);
}
</style>
