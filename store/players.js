export const state = () => ({
  list: []
})

export const getters = {
  players: (state) => {
    return state
  },
  getPlayerName: (state) => (playerId) => {
    const playerEntry = state.list.find((e) => e.id === playerId)
    if (playerEntry) {
      return playerEntry.name
    } else {
      return null
    }
  }
}

export const mutations = {
  removePlayer(state, playerId) {
    state.list.splice(
      state.list.findIndex((e) => e.id === playerId),
      1
    )
  },
  addPlayer(state, player) {
    state.list.push(player)
  },
  loadFromSave(state, players) {
    for (const [key, value] of Object.entries(players)) {
      if (
        (typeof value !== 'undefined' && value.length > 0) ||
        value > 0 ||
        typeof value === 'boolean'
      ) {
        state[key] = value
      }
    }
  }
}

export const actions = {
  updatePlayer({ commit, rootState }, payload) {
    const player = payload.meta.author
    if (rootState.players.list.find((e) => e.id === player.id)) {
      commit('removePlayer', player.id)
      commit('addPlayer', player)
    } else {
      commit('addPlayer', player)
    }
  }
}
