export const state = () => ({
  id: 0,
  name: '',
  notes: '',
  fateChips: {},
  incapacitated: false,
  shaken: false,
  wounds: 0,
  fatigues: 0,
  powerPointsCurrent: 0,
  powerPointsMax: 0,
  attributeList: [],
  skillList: [],
  handicapList: [],
  talentList: [],
  gearList: [],
  charNames: {}
})

export const getters = {
  charSave: (state) => {
    return state
  },
  getGearList: (state) => {
    return [...state.gearList].sort((a, b) => {
      if (a.id < b.id) {
        return -1
      } else if (a.id > b.id) {
        return 1
      }
      return 0
    })
  },
  getGearTotal: (state, getters) => {
    return [...getters.getGearList].reduce(
      (prev, curr) => prev + curr.value * curr.count,
      0
    )
  },
  getAuthorName: (state) => (id) => {
    return state.charNames[id]
  }
}

export const mutations = {
  setFateChips(state, {type, value}) {
    state.fateChips[type] = value
  },
  setIncapacitated(state, value) {
    state.incapacitated = value
  },
  setWounds(state, value) {
    state.wounds = value
  },
  setFatigues(state, value) {
    state.fatigues = value
  },
  setPowerPointsCurrent(state, value) {
    state.powerPointsCurrent = value
  },
  setPowerPointsMax(state, value) {
    state.powerPointsMax = value
  },
  setShaken(state, value) {
    state.shaken = value
  },
  removeGear(state, gear) {
    const list = state.gearList
    const existingGear = list.find((e) => e.id === gear.id)
    if (existingGear) {
      list.splice(
        list.findIndex((e) => e.id === gear.id),
        1
      )
    }
  },
  addGear(state, gear) {
    state.gearList.push(gear)
  },
  updateGear(state, gear) {
    const list = state.gearList
    const existingGear = list.find((e) => e.id === gear.id)
    if (existingGear) {
      gear.id = gear.name
      for (const [key, value] of Object.entries(gear)) {
        if (typeof value !== 'undefined') {
          existingGear[key] = value
        }
      }
    }
  },
  loadFromSave(state, charSave) {
    for (const [key, value] of Object.entries(charSave)) {
      if (
        (typeof value !== 'undefined' && value.length > 0) ||
        value > 0 ||
        typeof value === 'boolean'
      ) {
        state[key] = value
      }
    }
  },
  loadFromOldSave(state, charSave) {
    // convert old save -> TODO delete next week
    if (charSave.name.length > 0) {
      state.name = charSave.name
    }
    if (charSave.notes.length > 0) {
      state.notes = charSave.notes
    }
    if (
      Object.keys(charSave.attribute.liste).length !== 0 ||
      charSave.attribute.liste.constructor !== Object
    ) {
      for (const [id, value] of Object.entries(charSave.attribute.liste)) {
        state.attributeList.push({
          id,
          value
        })
      }
    }
    if (
      Object.keys(charSave.fertigkeiten.liste).length !== 0 ||
      charSave.fertigkeiten.liste.constructor !== Object
    ) {
      for (const [id, value] of Object.entries(charSave.fertigkeiten.liste)) {
        state.skillList.push({
          id,
          value
        })
      }
    }
    if (
      Object.keys(charSave.handicaps.liste).length !== 0 ||
      charSave.handicaps.liste.constructor !== Object
    ) {
      for (const [id, value] of Object.entries(charSave.handicaps.liste)) {
        state.handicapList.push({
          id,
          value
        })
      }
    }
    if (charSave.talente.liste.length !== 0) {
      for (let index = 0; index < charSave.talente.liste.length; index++) {
        const element = charSave.talente.liste[index]
        state.talentList.push({ id: element })
      }
    }
  },
  updateCharName(state, { id, authorName }) {
    state.charNames[id] = authorName
  },
  setName(state, name) {
    state.name = name
    state.charNames[state.id] = name
  },
  setNotes(state, notes) {
    state.notes = notes
  },
  setId(state, id) {
    state.id = id
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
export const actions = {
  updateCharNames({ commit }, { meta }) {
    commit('updateCharName', { id: meta.author, authorName: meta.authorName })
  },
  modifyGear({ commit, rootState }, gear) {
    gear.id = gear.id || gear.name
    const existingGear = rootState.charSave.gearList.find(
      (e) => e.id === gear.id
    )
    if (gear.count === 0 || gear.count === '0') {
      commit('removeGear', gear)
    } else if (existingGear) {
      commit('updateGear', gear)
    } else {
      commit('addGear', gear)
    }
  },
  uniqueId({ commit, rootState }) {
    const currentId = rootState.charSave.id
    if (currentId === 0) {
      const uid = Math.random()
        .toString(36)
        .substr(2, 12)
      commit('setId', uid)
    }
  }
}
