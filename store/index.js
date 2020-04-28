export const state = () => ({
  charSave: {
    name: '',
    notes: ''
  }
})

export const mutations = {
  setName(state, name) {
    state.charSave.name = name
  },
  setNotes(state, notes) {
    state.charSave.notes = notes
  }
}
