<template>
  <div class="modal" :class="{ 'is-active': modalIsActive }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Würfelhilfe</p>
        <button
          class="delete"
          aria-label="close"
          @click="modalIsActive = false"
        ></button>
      </header>
      <section class="modal-card-body">
        <div class="field">
          <label class="label">Kommentar</label>
          <div class="control">
            <input
              v-model="comment"
              type="text"
              class="input"
              placeholder="Wurf mit Würfelhilfe"
            />
          </div>
        </div>
        <div class="field is-horizontal">
          <div class="field-body">
            <div class="field">
              <label class="label">W4</label>
              <div class="control">
                <input v-model="dice4" type="text" class="input" />
              </div>
            </div>
            <div class="field">
              <label class="label">W6</label>
              <div class="control">
                <input v-model="dice6" type="text" class="input" />
              </div>
            </div>
            <div class="field">
              <label class="label">W8</label>
              <div class="control">
                <input v-model="dice8" type="text" class="input" />
              </div>
            </div>
            <div class="field">
              <label class="label">W10</label>
              <div class="control">
                <input v-model="dice10" type="text" class="input" />
              </div>
            </div>
            <div class="field">
              <label class="label">W12</label>
              <div class="control">
                <input v-model="dice12" type="text" class="input" />
              </div>
            </div>
          </div>
        </div>
        <br />
        <h3 class="subtitle">Optionen</h3>
        <div class="field">
          <div class="control">
            <label class="checkbox">
              <input v-model="wildDice" type="checkbox" />
              <span :class="{ 'has-text-grey': !wildDice }">
                Wild Die (W6) mitwerfen.
              </span>
            </label>
            <label v-if="$route.name !== 'chronicle'" class="checkbox">
              <input v-model="showLastRoll" type="checkbox" />
              <span :class="{ 'has-text-grey': !showLastRoll }">
                Zeige den letzten Wurf im PopUp (unten).
              </span>
            </label>
            <label v-else class="checkbox" disabled>
              <input v-model="showLastRoll" type="checkbox" disabled />
              <span class="has-text-grey">
                <del>
                  Zeige den letzten Wurf im PopUp (unten).
                </del>
              </span>
            </label>
            <label class="checkbox">
              <input v-model="explodingDice" type="checkbox" />
              <span :class="{ 'has-text-grey': !explodingDice }">
                Würfel explodieren automatisch.
              </span>
            </label>
            <label class="checkbox">
              <input v-model="showSuccessByFour" type="checkbox" />
              <span :class="{ 'has-text-grey': !showSuccessByFour }">
                Zeige Erfolge und Steigerungen an.
              </span>
            </label>
          </div>
        </div>
        <br />
        <h3 class="subtitle">Modifikatoren</h3>
        <div
          v-for="(mod, index) in modifications"
          :key="index"
          class="field is-horizontal"
        >
          <div class="field-body">
            <div class="field">
              <div class="control">
                <GameButton
                  button-type="delete"
                  @button-click="removeMod(index)"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  :value="mod.name"
                  type="text"
                  class="input"
                  placeholder="Label (Optional)"
                  @change="updateMod(index, 'name', $event.target.value)"
                />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input
                  :value="mod.value"
                  type="text"
                  class="input"
                  placeholder="z.B. '-2'"
                  @change="updateMod(index, 'value', $event.target.value)"
                />
              </div>
            </div>
          </div>
        </div>
        <GameButton button-type="plus" @button-click="addMod" />
        <br />
        <div class="field">
          <label class="label">Tags (Komma-getrennt)</label>
          <div class="control">
            <input
              v-model="tags"
              type="text"
              class="input"
              placeholder="Tag1, Tag2"
            />
          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button is-success" @click="rollDice">Würfeln</button>
        <button class="button is-info" @click="saveDicePool">
          Würfeln & Speichern
        </button>
        <button class="button" @click="modalIsActive = false">Abbrechen</button>
      </footer>
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="modalIsActive = false"
    ></button>
  </div>
</template>

<script>
import GameButton from '~/components/common/GameButton'

export default {
  name: 'DiceModal',
  components: { GameButton },
  data() {
    return {
      comment: '',
      dice4: 0,
      dice6: 0,
      dice8: 0,
      dice10: 0,
      dice12: 0,
      wildDice: false,
      showLastRoll: false,
      explodingDice: true,
      showSuccessByFour: true,
      modifications: [{ name: '', value: 0 }],
      tags: ''
    }
  },
  computed: {
    modalIsActive: {
      get() {
        return this.$store.state.diceModal.modalIsActive
      },
      set(value) {
        this.$store.commit('diceModal/setModalIsActive', value)
      }
    }
  },
  created() {
    this.unwatch = this.$store.watch(
      (state) => state.diceModal.modalIsActive,
      (newValue) => {
        if (newValue) {
          const dicePool = this.$store.state.diceModal.dicePool
          this.comment = dicePool.comment
          if (dicePool.dice.find((e) => e.type === 4)) {
            this.dice4 = dicePool.dice.find((e) => e.type === 4).count
          } else {
            this.dice4 = 0
          }
          if (dicePool.dice.find((e) => e.type === 6)) {
            this.dice6 = dicePool.dice.find((e) => e.type === 6).count
          } else {
            this.dice6 = 0
          }
          if (dicePool.dice.find((e) => e.type === 8)) {
            this.dice8 = dicePool.dice.find((e) => e.type === 8).count
          } else {
            this.dice8 = 0
          }
          if (dicePool.dice.find((e) => e.type === 10)) {
            this.dice10 = dicePool.dice.find((e) => e.type === 10).count
          } else {
            this.dice10 = 0
          }
          if (dicePool.dice.find((e) => e.type === 12)) {
            this.dice12 = dicePool.dice.find((e) => e.type === 12).count
          } else {
            this.dice12 = 0
          }
          this.wildDice = dicePool.options.wildDice
          this.showLastRoll = dicePool.options.showLastRoll
          this.explodingDice = dicePool.options.explodingDice
          this.showSuccessByFour = dicePool.options.showSuccessByFour
          if (dicePool.modifications) {
            this.modifications = [...dicePool.modifications]
          }
          this.tags = dicePool.tags ? dicePool.tags.join(', ') : ''
        }
      }
    )
  },
  beforeDestroy() {
    this.unwatch()
  },
  methods: {
    saveDicePool() {
      if (
        this.dice4 + this.dice6 + this.dice8 + this.dice10 + this.dice12 >
        0
      ) {
        const dicePool = {
          comment:
            this.comment && this.comment.trim().length > 0
              ? this.comment
              : 'Wurf mit Würfelhilfe',
          dice: [
            { type: 4, count: Number(this.dice4) },
            { type: 6, count: Number(this.dice6) },
            { type: 8, count: Number(this.dice8) },
            { type: 10, count: Number(this.dice10) },
            { type: 12, count: Number(this.dice12) }
          ],
          options: {
            wildDice: this.wildDice,
            showLastRoll: this.showLastRoll && this.$route.name !== 'chronicle',
            showSuccessByFour: this.showSuccessByFour,
            explodingDice: this.explodingDice
          },
          modifications: this.modifications,
          tags: this.tags ? this.tags.split(',').map((e) => e.trim()) : []
        }
        this.$store.commit('charSave/saveDicePool', dicePool)
        this.rollDice()
      }
    },
    rollDice() {
      if (
        this.dice4 + this.dice6 + this.dice8 + this.dice10 + this.dice12 >
        0
      ) {
        const dicePool = {
          comment:
            this.comment && this.comment.trim().length > 0
              ? this.comment
              : 'Wurf mit Würfelhilfe',
          dice: [
            { type: 4, count: Number(this.dice4) },
            { type: 6, count: Number(this.dice6) },
            { type: 8, count: Number(this.dice8) },
            { type: 10, count: Number(this.dice10) },
            { type: 12, count: Number(this.dice12) }
          ],
          options: {
            wildDice: this.wildDice,
            showLastRoll: this.showLastRoll && this.$route.name !== 'chronicle',
            showSuccessByFour: this.showSuccessByFour,
            explodingDice: this.explodingDice
          },
          modifications: this.modifications,
          tags: this.tags ? this.tags.split(',').map((e) => e.trim()) : []
        }
        this.$store.dispatch('chronicle/rollDice', dicePool)
        this.modalIsActive = false
      }
    },
    addMod() {
      if (!this.modifications) {
        this.modifications = []
      }
      this.modifications.push({ name: '', value: 0 })
    },
    removeMod(index) {
      this.modifications.splice(index, 1)
    },
    updateMod(index, prop, value) {
      if (prop === 'value') {
        this.modifications[index][prop] = Number(value)
      } else {
        this.modifications[index][prop] = value
      }
    }
  }
}
</script>
