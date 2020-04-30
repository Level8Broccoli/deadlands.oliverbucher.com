export const state = () => ({
  list: [],
  showLastRoll: true
})

export const mutations = {
  addToChronicle(state, payload) {
    state.list.push(payload)
  },

  setShowLastRoll(state, boolean) {
    state.showLastRoll = boolean
  }
}

export const actions = {
  commitOwnAction({ commit, state, rootState }, payload) {
    const time = new Date()
    const timestamp = `${time.getHours()}.${time.getMinutes()} Uhr`
    const author = rootState.charSave.id
    const meta = { time, timestamp, author }
    commit('addToChronicle', { meta, payload })
  },
  commitOtherAction({ commit }) {
    // TODO
  },
  rollDice(
    { commit, dispatch },
    { comment, dice, wild, modifications, showLastRoll }
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
      rollNormal,
      rollWild,
      modifications,
      result,
      comment
    })
  }
}
