import websocketPlugin from '~/plugins/websocketPlugin'

export const state = () => ({
  list: [],
  showLastRoll: false,
  wsConnection: false
})

export const getters = {
  getLastRoll: (state, getters) => {
    return getters.getList.find((e) => e.meta.type === 'diceRoll')
  },
  getList: (state) => {
    return [...state.list].sort((a, b) => a.meta.time < b.meta.time)
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
  }
}

export const actions = {
  commitOwnAction({ commit, rootState }, { meta, payload }) {
    const time = new Date()
    const timestamp = `${time.getHours()}.${('0' + time.getMinutes()).slice(
      -2
    )} Uhr`
    const author = rootState.charSave.id
    meta = { ...meta, time, timestamp, author }
    commit('addToChronicle', { meta, payload })
  },
  commitOtherAction({ commit }) {
    // TODO Websocket
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
