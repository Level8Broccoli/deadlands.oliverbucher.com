export const state = () => ({
  id: 0,
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
  clickAttribute(state, payload) {
    const list = state.attributeList
    const currentEntry = list.find((e) => e.id === payload.id)
    if (currentEntry) {
      if (currentEntry.value === payload.value) {
        list.splice(
          list.findIndex((e) => e.id === payload.id),
          1
        )
      } else {
        currentEntry.value = payload.value
      }
    } else {
      list.push(payload)
    }
  },
  clickSkill(state, payload) {
    const list = state.skillList
    const currentEntry = list.find((e) => e.id === payload.id)
    if (currentEntry) {
      if (currentEntry.value === payload.value) {
        list.splice(
          list.findIndex((e) => e.id === payload.id),
          1
        )
      } else {
        currentEntry.value = payload.value
      }
    } else {
      list.push(payload)
    }
  },
  clickHandicap(state, payload) {
    const list = state.handicapList
    const currentEntry = list.find((e) => e.id === payload.id)
    if (currentEntry) {
      if (currentEntry.value === payload.value) {
        list.splice(
          list.findIndex((e) => e.id === payload.id),
          1
        )
      } else {
        currentEntry.value = payload.value
      }
    } else {
      list.push(payload)
    }
  },
  clickTalent(state, payload) {
    const list = state.talentList
    const currentEntry = list.find((e) => e.id === payload.id)
    if (currentEntry) {
      list.splice(
        list.findIndex((e) => e.id === payload.id),
        1
      )
    } else {
      list.push(payload)
    }
  }
}
