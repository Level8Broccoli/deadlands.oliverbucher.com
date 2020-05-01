export const state = () => ({
  id: 0,
  name: '',
  notes: '',
  attributeList: [],
  skillList: [],
  handicapList: [],
  talentList: [],
  gearList: []
})

export const getters = {
  charSave: (state) => {
    return state
  },
  getGearList: (state) => {
    return [...state.gearList]
      .filter((e) => e.count > 0)
      .sort((a, b) => {
        if (a.id < b.id) {
          return -1
        } else if (a.id > b.id) {
          return 1
        }
        return 0
      })
  }
}

export const mutations = {
  saveGear(state, gear) {
    gear.id = gear.name
    const savedGear = state.gearList.find((e) => (e.id = gear.id))
    if (savedGear) {
      console.log('override')

      for (const [key, value] of Object.entries(gear)) {
        if (typeof value !== 'undefined' && value.length > 0) {
          savedGear[key] = value
        }
      }
    } else {
      state.gearList.push(gear)
    }
  },
  loadFromSave(state, charSave) {
    for (const [key, value] of Object.entries(charSave)) {
      if (typeof value !== 'undefined' && value.length > 0) {
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
  setName(state, name) {
    state.name = name
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
