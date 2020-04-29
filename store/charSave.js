export const state = () => ({
  name: '',
  notes: '',
  attributesList: []
})

export const mutations = {
  setName(state, name) {
    state.name = name
  },
  setNotes(state, notes) {
    state.notes = notes
  },
  clickAttribute(state, entry) {
    const list = state.attributesList
    const currentEntry = list.find((e) => e.id === entry.id)
    if (currentEntry) {
      if (currentEntry.value === entry.value) {
        list.splice(list.indexOf(entry), 1)
      } else {
        currentEntry.value = entry.value
      }
    } else {
      list.push(entry)
    }
  }
}
