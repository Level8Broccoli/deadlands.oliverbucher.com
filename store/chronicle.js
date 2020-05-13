import websocketPlugin from '~/plugins/websocketPlugin'

export const state = () => ({
  list: [],
  chronicleLimit: 25,
  showLastRoll: false,
  wsConnection: false
})

export const getters = {
  getLastRoll: (state, getters, rootState) => {
    return getters.getList
      .filter((e) => e.meta.type === 'diceRoll')
      .find((e) => e.meta.author.id === rootState.charSave.id)
  },
  getList: (state) => {
    const list = [...state.list].sort((a, b) => b.meta.time - a.meta.time)
    if (!isNaN(state.chronicleLimit)) {
      return list.slice(0, state.chronicleLimit)
    }
    return list
  }
}

export const mutations = {
  addToChronicle(state, payload) {
    console.log('addToChronicle', payload)

    state.list.push(payload)
  },
  setShowLastRoll(state, boolean) {
    state.showLastRoll = boolean
  },
  setWsConnection(state, boolean) {
    state.wsConnection = boolean
  },
  setChronicleLimit(state, value) {
    state.chronicleLimit = value
  }
}

export const actions = {
  commitOwnAction({ commit, rootState }, { meta, payload }) {
    const now = new Date()
    const timestamp = `${now.getHours()}.${('0' + now.getMinutes()).slice(
      -2
    )} Uhr`
    const time = now.getTime()
    const author = rootState.charSave
    meta = { ...meta, time, timestamp, author }
    commit('addToChronicle', { meta, payload })
  },
  commitOtherAction({ commit, rootState }, { meta, payload }) {
    if (meta.author.id !== rootState.charSave.id) {
      commit('addToChronicle', { meta, payload })
    }
  },
  rollDice(
    { commit, dispatch },
    { comment, dice, options, modifications, tags }
  ) {
    const WILD_DICE = 6

    const rollDie = (die, explodingDice) => {
      const result = []
      while (true) {
        const rolled = Math.ceil(Math.random() * die)
        result.push({ rolled, die, explodingDice })
        if (rolled !== die || !explodingDice) {
          break
        }
      }
      return result
    }

    const rollResult = {
      rollNormal: [],
      rollWild: [],
      endResult: null,
      effects: {}
    }

    for (const die of dice) {
      for (let index = 0; index < die.count; index++) {
        const roll = rollDie(die.type, options.explodingDice)
        rollResult.rollNormal.push(roll)
      }
    }

    if (options.wildDice) {
      const roll = rollDie(WILD_DICE, options.explodingDice)
      rollResult.rollWild.push(roll)
    }

    const totalRolls = (acc, curr) => (acc += curr.rolled)
    const totalNormal = rollResult.rollNormal.flat().reduce(totalRolls, 0)
    const totalWild = rollResult.rollWild.flat().reduce(totalRolls, 0)

    rollResult.endResult = Math.max(totalNormal, totalWild)
    if (modifications) {
      for (let i = 0; i < modifications.length; i++) {
        const mod = modifications[i]
        rollResult.endResult += mod.value
      }
    }

    if (options.showSuccessByFour) {
      rollResult.effects = {
        success: rollResult.endResult >= 4,
        critFailure: totalNormal === 1 && totalWild === 1,
        raise: Math.floor(rollResult.endResult / 4) - 1
      }
    }

    if (options.showLastRoll) {
      commit('setShowLastRoll', true)
    }

    dispatch('commitOwnAction', {
      meta: { type: 'diceRoll' },
      payload: {
        dicePool: { comment, dice, options, modifications, tags },
        rollResult
      }
    })
  }
}

export const plugins = [websocketPlugin]
