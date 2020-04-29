export const state = () => ({
  name: '',
  notes: ''
})

export const mutations = {
  setName(state, name) {
    state.name = name
  },
  setNotes(state, notes) {
    state.notes = notes
  }
}
