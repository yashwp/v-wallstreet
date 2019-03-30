const state = {
  funds: 10000,
  stocks: []
}

const mutations = {
  'BUY_STOCK' (state, { id, price, quantity }) {
    const record = state.stocks.find(i => i.id === id)
    if (record) {
      record.quantity += quantity
    } else {
      state.stocks.push({
        id, quantity
      })
    }
    state.funds -= price * quantity
  },
  'SELL_STOCK' (state, { id, price, quantity }) {
    const record = state.stocks.find(i => i.id === id)
    if (record.quantity > quantity) {
      record.quantity -= quantity
    } else {
      state.stocks.splice(state.stocks.indexOf(id), 1)
    }
    state.funds += price * quantity
  }
}

const actions = {
  sellStock: ({ commit }, order) => {
    commit('SELL_STOCK', order)
  }
}

const getters = {
  stockPortfolio (state, getter) {
    return state.stocks.map(stock => {
      const record = getter.stocks.find(el => el.id === stock.id)
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds (state) {
    return state.funds
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
