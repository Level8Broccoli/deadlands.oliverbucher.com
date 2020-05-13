export const state = () => ({
  list: []
})

export const getters = {
  getPlayerName: (state) => (playerId) => {
    return state.list.find((e) => e.id === playerId)
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
  }
}

export const actions = {
  updatePlayer({ commit, rootState }, payload) {
    const player = payload.author
    if (rootState.players.list.find((e) => e.id === player.id)) {
      commit('removePlayer', player.id)
      commit('addPlayer', player)
    } else {
      commit('addPlayer', player)
    }
  }
}
