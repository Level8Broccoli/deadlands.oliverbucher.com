export const state = () => ({
  id: 0,
  name: '',
  introduction: '',
  notes: '',
  chips: 0,
  shaken: false,
  wounds: 0,
  fatigues: 0,
  powerPointsCurrent: 0,
  powerPointsMax: 0,
  attributeList: [],
  skillList: [],
  handicapList: [],
  talentList: [],
  powerList: [],
  gearList: [
    {
      count: 1,
      name: 'Startkapital',
      descr: '',
      value: '-250',
      id: 'Startkapital'
    }
  ],
  charPoints: {
    attributes: 5,
    skills: 12,
    handicaps: 4,
    talents: 3,
    powers: 0
  },
  options: [],
  showOnlyChoosenSkills: false,
  showOnlyChoosenHandicaps: false,
  showOnlyChoosenTalents: false,
  showOnlyChoosenPowers: false,
  layout: 'default',
  favouriteDicePools: []
})

export const getters = {
  charSave: (state) => {
    return state
  },
  getSkillList: (state) => {
    return state.skillList
  },
  getHandicapList: (state) => {
    return state.handicapList
  },
  getTalentList: (state) => {
    return state.talentList
  },
  getPowerList: (state) => {
    return state.powerList
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
  }
}

export const mutations = {
  toggleLayout(state) {
    if (state.layout === 'default') {
      state.layout = 'extended'
    } else {
      state.layout = 'default'
    }
  },
  toggleOption(state, option) {
    if (state.options.includes(option)) {
      state.options.splice(state.options.indexOf(option), 1)
    } else {
      state.options.push(option)
    }
  },
  deleteFavourite(state, index) {
    state.favouriteDicePools.splice(index, 1)
  },
  saveDicePool(state, dicePool) {
    state.favouriteDicePools.push(dicePool)
  },
  setCharPoints(state, { type, value }) {
    if (value >= 0) {
      state.charPoints[type] = value
    }
  },
  setChips(state, value) {
    if (value >= 0) {
      state.chips = value
    }
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
        typeof value === 'boolean' ||
        (typeof value === 'object' && value !== null)
      ) {
        state[key] = value
      }
    }
  },
  setShowOnlyChoosenSkills(state, bool) {
    state.showOnlyChoosenSkills = bool
  },
  setShowOnlyChoosenHandicaps(state, bool) {
    state.showOnlyChoosenHandicaps = bool
  },
  setShowOnlyChoosenTalents(state, bool) {
    state.showOnlyChoosenTalents = bool
  },
  setShowOnlyChoosenPowers(state, bool) {
    state.showOnlyChoosenPowers = bool
  },
  setName(state, name) {
    state.name = name
  },
  setNotes(state, notes) {
    state.notes = notes
  },
  setIntroduction(state, introduction) {
    state.introduction = introduction
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
  },
  clickPower(state, payload) {
    const list = state.powerList
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
