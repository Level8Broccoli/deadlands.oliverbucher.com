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
          <p class="heading">
            <a v-if="wounds > 0" @click="wounds--">
              <span class="icon has-text-info">
                <font-awesome-icon :icon="['fad', 'angle-double-left']" />
              </span>
            </a>
            <span v-else class="icon has-text-grey-light">
              <font-awesome-icon :icon="['fad', 'angle-double-left']" />
            </span>
            {{ charState.wounds }}
            <a v-if="wounds < 4" @click="wounds++">
              <span class="icon has-text-info">
                <font-awesome-icon :icon="['fad', 'angle-double-right']" />
              </span>
            </a>
            <span v-else class="icon has-text-grey-light">
              <font-awesome-icon :icon="['fad', 'angle-double-right']" />
            </span>
          </p>
          <p class="title">
            {{ wounds }}
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">
            <a v-if="fatigues > 0" @click="fatigues--">
              <span class="icon has-text-info">
                <font-awesome-icon :icon="['fad', 'angle-double-left']" />
              </span>
            </a>
            <span v-else class="icon has-text-grey-light">
              <font-awesome-icon :icon="['fad', 'angle-double-left']" />
            </span>
            {{ charState.fatigues }}
            <a v-if="fatigues < 3" @click="fatigues++">
              <span class="icon has-text-info">
                <font-awesome-icon :icon="['fad', 'angle-double-right']" />
              </span>
            </a>
            <span v-else class="icon has-text-grey-light">
              <font-awesome-icon :icon="['fad', 'angle-double-right']" />
            </span>
          </p>
          <p class="title">
            {{ fatigues }}
          </p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">
            <a v-if="chips > 0" @click="chips--">
              <span class="icon has-text-info">
                <font-awesome-icon :icon="['fad', 'angle-double-left']" />
              </span>
            </a>
            <span v-else class="icon has-text-grey-light">
              <font-awesome-icon :icon="['fad', 'angle-double-left']" />
            </span>
            Fate Chips
            <a @click="chips++">
              <span class="icon has-text-info">
                <font-awesome-icon :icon="['fad', 'angle-double-right']" />
              </span>
            </a>
          </p>
          <p class="title">
            {{ chips }}
          </p>
        </div>
      </div>
      <div v-if="powerPointsMax > 0" class="level-item has-text-centered">
        <div>
          <p class="heading">
            <a v-if="powerPointsCurrent > 0" @click="powerPointsCurrent--">
              <span class="icon has-text-info">
                <font-awesome-icon :icon="['fad', 'angle-double-left']" />
              </span>
            </a>
            <span v-else class="icon has-text-grey-light">
              <font-awesome-icon :icon="['fad', 'angle-double-left']" />
            </span>
            Machtpunkte
            <a
              v-if="powerPointsCurrent < powerPointsMax"
              @click="powerPointsCurrent++"
            >
              <span class="icon has-text-info">
                <font-awesome-icon :icon="['fad', 'angle-double-right']" />
              </span>
            </a>
          </p>
          <p class="title">{{ powerPointsCurrent }} / {{ powerPointsMax }}</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'CharacterStats',
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
    chips: {
      get() {
        return this.$store.state.charSave.chips
      },
      set(value) {
        this.$store.commit('charSave/setChips', value)
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
