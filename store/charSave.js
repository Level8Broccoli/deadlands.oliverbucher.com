export const state = () => ({
  name: '',
  notes: '',
  attributeList: [],
  skillList: [],
  handicapList: [],
  talentList: []
})

export const mutations = {
  setName(state, name) {
    state.name = name
  },
  setNotes(state, notes) {
    state.notes = notes
  },
  clickAttribute(state, entry) {
    const list = state.attributeList
    const currentEntry = list.find((e) => e.id === entry.id)
    if (currentEntry) {
      if (currentEntry.value === entry.value) {
        list.splice(
          list.findIndex((e) => e.id === entry.id),
          1
        )
      } else {
        currentEntry.value = entry.value
      }
    } else {
      list.push(entry)
    }
  },
  clickSkill(state, entry) {
    const list = state.skillList
    const currentEntry = list.find((e) => e.id === entry.id)
    if (currentEntry) {
      if (currentEntry.value === entry.value) {
        list.splice(
          list.findIndex((e) => e.id === entry.id),
          1
        )
      } else {
        currentEntry.value = entry.value
      }
    } else {
      list.push(entry)
    }
  }
}
