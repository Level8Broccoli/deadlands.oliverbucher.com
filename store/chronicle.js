export const state = () => ({
  list: []
})

export const mutations = {
  rollDice(state, { comment, dice, wild, modifications }) {
    const time = new Date()
    const timestamp = `${time.getHours()}.${time.getMinutes()} Uhr (${time.getSeconds()}.${time.getMilliseconds()})`

    const rollNormal = []
    let totalNormal = 0
    while (true) {
      const rolled = Math.ceil(Math.random() * dice)
      totalNormal += rolled
      rollNormal.push({
        dice,
        rolled
      })
      if (rolled !== dice) {
        break
      }
    }

    const WILD_DICE = 6
    const rollWild = []
    let totalWild = 0
    if (wild) {
      while (true) {
        const rolled = Math.ceil(Math.random() * WILD_DICE)
        totalWild += rolled
        rollWild.push({
          dice: WILD_DICE,
          rolled
        })
        if (rolled !== WILD_DICE) {
          break
        }
      }
    }

    let biggerTotal = Math.max(totalNormal, totalWild)
    if (modifications) {
      for (let i = 0; i < modifications.length; i++) {
        const mod = modifications[i]
        biggerTotal += mod.value
      }
    }

    const result = {
      value: biggerTotal,
      success: biggerTotal >= 4,
      critFailure: totalNormal === 1 && totalWild === 1,
      raise: Math.floor(biggerTotal / 4) - 1
    }

    state.list.push({
      time,
      timestamp,
      rollNormal,
      rollWild,
      modifications,
      result,
      comment
    })

    // if (this.currentTab !== 5) {
    //   this.showLastRoll = true
    // }
  }
}
