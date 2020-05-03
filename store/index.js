export const state = () => ({
  dice: [4, 6, 8, 10, 12],
  cards: {
    1: { path: '01_2-clubs.svg', name: '2 of Clubs' },
    2: { path: '02_2-diamonds.svg', name: '2 of Diamonds' },
    3: { path: '03_2-hearts.svg', name: '2 of Hearts' },
    4: { path: '04_2-spades.svg', name: '2 of Spades' },
    5: { path: '05_3-clubs.svg', name: '3 of Clubs' },
    6: { path: '06_3-diamonds.svg', name: '3 of Diamonds' },
    7: { path: '07_3-hearts.svg', name: '3 of Hearts' },
    8: { path: '08_3-spades.svg', name: '3 of Spades' },
    9: { path: '09_4-clubs.svg', name: '4 of Clubs' },
    10: { path: '10_4-diamonds.svg', name: '4 of Diamonds' },
    11: { path: '11_4-hearts.svg', name: '4 of Hearts' },
    12: { path: '12_4-spades.svg', name: '4 of Spades' },
    13: { path: '13_5-clubs.svg', name: '5 of Clubs' },
    14: { path: '14_5-diamonds.svg', name: '5 of Diamonds' },
    15: { path: '15_5-hearts.svg', name: '5 of Hearts' },
    16: { path: '16_5-spades.svg', name: '5 of Spades' },
    17: { path: '17_6-clubs.svg', name: '6 of Clubs' },
    18: { path: '18_6-diamonds.svg', name: '6 of Diamonds' },
    19: { path: '19_6-hearts.svg', name: '6 of Hearts' },
    20: { path: '20_6-spades.svg', name: '6 of Spades' },
    21: { path: '21_7-clubs.svg', name: '7 of Clubs' },
    22: { path: '22_7-diamonds.svg', name: '7 of Diamonds' },
    23: { path: '23_7-hearts.svg', name: '7 of Hearts' },
    24: { path: '24_7-spades.svg', name: '7 of Spades' },
    25: { path: '25_8-clubs.svg', name: '8 of Clubs' },
    26: { path: '26_8-diamonds.svg', name: '8 of Diamonds' },
    27: { path: '27_8-hearts.svg', name: '8 of Hearts' },
    28: { path: '28_8-spades.svg', name: '8 of Spades' },
    29: { path: '29_9-clubs.svg', name: '9 of Clubs' },
    30: { path: '30_9-diamonds.svg', name: '9 of Diamonds' },
    31: { path: '31_9-hearts.svg', name: '9 of Hearts' },
    32: { path: '32_9-spades.svg', name: '9 of Spades' },
    33: { path: '33_10-clubs.svg', name: '10 of Clubs' },
    34: { path: '34_10-diamonds.svg', name: '10 of Diamonds' },
    35: { path: '35_10-hearts.svg', name: '10 of Hearts' },
    36: { path: '36_10-spades.svg', name: '10 of Spades' },
    37: { path: '37_J-clubs.svg', name: 'Jack of Clubs' },
    38: { path: '38_J-diamonds.svg', name: 'Jack of Diamonds' },
    39: { path: '39_J-hearts.svg', name: 'Jack of Hearts' },
    40: { path: '40_J-spades.svg', name: 'Jack of Spades' },
    41: { path: '41_Q-clubs.svg', name: 'Queen of Clubs' },
    42: { path: '42_Q-diamonds.svg', name: 'Queen of Diamonds' },
    43: { path: '43_Q-hearts.svg', name: 'Queen of Hearts' },
    44: { path: '44_Q-spades.svg', name: 'Queen of Spades' },
    45: { path: '45_K-clubs.svg', name: 'King of Clubs' },
    46: { path: '46_K-diamonds.svg', name: 'King of Diamonds' },
    47: { path: '47_K-hearts.svg', name: 'King of Hearts' },
    48: { path: '48_K-spades.svg', name: 'King of Spades' },
    49: { path: '49_A-clubs.svg', name: 'Ace of Clubs' },
    50: { path: '50_A-diamonds.svg', name: 'Ace of Diamonds' },
    51: { path: '51_A-hearts.svg', name: 'Ace of Hearts' },
    52: { path: '52_A-spades.svg', name: 'Ace of Spades' },
    53: { path: '53_Joker-1.svg', name: 'Joker' },
    54: { path: '54_Joker-2.svg', name: 'Joker' }
  },
  cardsRemaining: {},
  cardBack: 'card_back.svg',
  title: 'Deadlands RPG',
  tabList: [
    {
      id: 'general',
      name: 'Allgemein',
      link: '/'
    },
    {
      id: 'attributes',
      name: 'Attribute',
      link: '/attributes',
      points: 5
    },
    {
      id: 'skills',
      name: 'Fertigkeiten',
      link: '/skills',
      points: 12
    },
    {
      id: 'handicaps',
      name: 'Handicaps',
      link: '/handicaps',
      points: 4
    },
    {
      id: 'talents',
      name: 'Talente',
      link: '/talents',
      points: 3
    },
    {
      id: 'gear',
      name: 'Ausrüstung',
      link: '/gear'
    },
    {
      id: 'chronicle',
      name: 'Chronik',
      link: '/chronicle',
      notification: false
    }
  ]
})

export const getters = {
  getNumberOfCards: (state) => {
    return Object.keys(state.cards).length
  },
  getNumberOfCardsRemaining: (state) => {
    return Object.keys(state.cardsRemaining).length
  }
}

export const mutations = {
  shuffleDeck(state) {
    const cards = state.cards

    for (const [id, value] of Object.entries(cards)) {
      state.cardsRemaining[id] = value
    }
  }
}

export const actions = {
  udpateCardDeck({ commit }, { meta, payload }) {
    if (meta.type === 'shuffleDeck') {
      commit('shuffleDeck')
    } else if (meta.type === 'drawCards') {
      // TODO
    }
  }
}
