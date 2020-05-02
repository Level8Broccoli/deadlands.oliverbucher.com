<template>
  <div class="box">
    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Angeschlagen</p>
          <a @click="shaken = !shaken">
            <p class="title">
              {{ shaken ? 'Ja' : 'Nein' }}
            </p>
          </a>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">{{ charState.wounds }}</p>
          <p class="title">
            <a v-if="wounds > 0" @click="wounds--">
              <span class="icon has-text-grey-light">
                <font-awesome-icon
                  transform="shrink-5"
                  :icon="['fas', 'minus']"
                />
              </span>
            </a>
            {{ wounds }}
            <a v-if="wounds < 4" @click="wounds++">
              <span class="icon has-text-grey-light">
                <font-awesome-icon
                  transform="shrink-5"
                  :icon="['fas', 'plus']"
                />
              </span>
            </a>
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">{{ charState.fatigues }}</p>
          <p class="title">
            <a v-if="fatigues > 0" @click="fatigues--">
              <span class="icon has-text-grey-light">
                <font-awesome-icon
                  transform="shrink-5"
                  :icon="['fas', 'minus']"
                />
              </span>
            </a>
            {{ fatigues }}
            <a v-if="fatigues < 3" @click="fatigues++">
              <span class="icon has-text-grey-light">
                <font-awesome-icon
                  transform="shrink-5"
                  :icon="['fas', 'plus']"
                />
              </span>
            </a>
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Fate Chips</p>
          <p class="title">
            <a v-if="fateChips > 0" @click="fateChips--">
              <span class="icon has-text-grey-light">
                <font-awesome-icon
                  transform="shrink-5"
                  :icon="['fas', 'minus']"
                />
              </span>
            </a>
            {{ fateChips }}
            <a @click="fateChips++">
              <span class="icon has-text-grey-light">
                <font-awesome-icon
                  transform="shrink-5"
                  :icon="['fas', 'plus']"
                />
              </span>
            </a>
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Machtpunkte</p>
          <p class="title">
            <a v-if="powerPointsCurrent > 0" @click="powerPointsCurrent--">
              <span class="icon has-text-grey-light">
                <font-awesome-icon
                  transform="shrink-5"
                  :icon="['fas', 'minus']"
                />
              </span>
            </a>
            {{ powerPointsCurrent }}
            <a
              v-if="powerPointsCurrent < powerPointsMax"
              @click="powerPointsCurrent++"
            >
              <span class="icon has-text-grey-light">
                <font-awesome-icon
                  transform="shrink-5"
                  :icon="['fas', 'plus']"
                />
              </span>
            </a>
            /
            <a v-if="powerPointsMax > 0" @click="powerPointsMax--">
              <span class="icon has-text-grey-light">
                <font-awesome-icon
                  transform="shrink-5"
                  :icon="['fas', 'minus']"
                />
              </span>
            </a>
            {{ powerPointsMax }}
            <a @click="powerPointsMax++">
              <span class="icon has-text-grey-light">
                <font-awesome-icon
                  transform="shrink-5"
                  :icon="['fas', 'plus']"
                />
              </span>
            </a>
          </p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'CharSave',
  computed: {
    charState() {
      return {
        wounds: [
          'Wunden',
          'Wunden (-1)',
          'Wunden (-2)',
          'Wunden (-3)',
          'Ausgeschaltet'
        ][this.wounds],
        fatigues: [
          'Erschöpfung',
          'Erschöpft (-1)',
          'Entkräftet (-2)',
          'Ausgeschaltet'
        ][this.fatigues]
      }
    },
    fateChips: {
      get() {
        return this.$store.state.charSave.fateChips
      },
      set(value) {
        this.$store.commit('charSave/setFateChips', value)
      }
    },
    incapacitated: {
      get() {
        return this.$store.state.charSave.incapacitated
      },
      set(value) {
        this.$store.commit('charSave/setIncapacitated', value)
      }
    },
    wounds: {
      get() {
        return this.$store.state.charSave.wounds
      },
      set(value) {
        this.$store.commit('charSave/setWounds', value)
      }
    },
    fatigues: {
      get() {
        return this.$store.state.charSave.fatigues
      },
      set(value) {
        this.$store.commit('charSave/setFatigues', value)
      }
    },
    powerPointsCurrent: {
      get() {
        return this.$store.state.charSave.powerPointsCurrent
      },
      set(value) {
        this.$store.commit('charSave/setPowerPointsCurrent', value)
      }
    },
    powerPointsMax: {
      get() {
        return this.$store.state.charSave.powerPointsMax
      },
      set(value) {
        this.$store.commit('charSave/setPowerPointsMax', value)
      }
    },
    shaken: {
      get() {
        return this.$store.state.charSave.shaken
      },
      set(value) {
        this.$store.commit('charSave/setShaken', value)
      }
    }
  }
}
</script>
