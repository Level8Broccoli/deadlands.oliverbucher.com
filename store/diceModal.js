export const state = () => ({
  modalIsActive: false,
  dicePool: {}
})

export const mutations = {
  setModalIsActive(state, boolean) {
    state.modalIsActive = boolean
  },
  openModal(state, payload) {
    state.modalIsActive = true
    state.dicePool = payload
  }
}
