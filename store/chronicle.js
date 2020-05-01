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
      .find((e) => e.meta.author === rootState.charSave.id)
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
    const author = rootState.charSave.id
    const authorName = rootState.charSave.name
    meta = { ...meta, time, timestamp, author, authorName }
    commit('addToChronicle', { meta, payload })
  },
  commitOtherAction({ commit, rootState }, { meta, payload }) {
    if (meta.author !== rootState.charSave.id) {
      commit('addToChronicle', { meta, payload })
    }
  },
  rollDice(
    { commit, dispatch },
    { comment, dice, wild, modifications, showLastRoll, tags }
  ) {
    const rollNormal = []
    let totalNormal = 0
    while (true) {
      const rolled = Math.ceil(Math.random() * dice)
      totalNormal += rolled
      rollNormal.push({
        dice,
        rolled
      })
      if (rolled !== dice) {
        break
      }
    }

    const WILD_DICE = 6
    const rollWild = []
    let totalWild = 0
    if (wild) {
      while (true) {
        const rolled = Math.ceil(Math.random() * WILD_DICE)
        totalWild += rolled
        rollWild.push({
          dice: WILD_DICE,
          rolled
        })
        if (rolled !== WILD_DICE) {
          break
        }
      }
    }

    let biggerTotal = Math.max(totalNormal, totalWild)
    if (modifications) {
      for (let i = 0; i < modifications.length; i++) {
        const mod = modifications[i]
        biggerTotal += mod.value
      }
    }

    const result = {
      value: biggerTotal,
      success: biggerTotal >= 4,
      critFailure: totalNormal === 1 && totalWild === 1,
      raise: Math.floor(biggerTotal / 4) - 1
    }

    if (showLastRoll) {
      commit('setShowLastRoll', true)
    }

    dispatch('commitOwnAction', {
      meta: { type: 'diceRoll' },
      payload: {
        dicePool: { comment, dice, wild, modifications, showLastRoll, tags },
        diceRoll: {
          rollNormal,
          rollWild,
          result
        }
      }
    })
  }
}

export const plugins = [websocketPlugin]
