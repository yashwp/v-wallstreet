import stocks from '../../data/stocks'

const state = {
  stocks: []
}

const mutations = {
  'SET_STOCKS' (state, stocks) {
    state.stocks = stocks
  },
  'RND_STOCKS' (state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(Math.random() * 100)
    })
  },
  'SET_PORTFOLIO' (state, portfolio) {
    state.funds = portfolio.funds
    state.stocks = portfolio.portfolio ? portfolio.portfolio : []
  }
}

const actions = {
  buyStock: ({ commit }, order) => {
    commit('BUY_STOCK', order)
  },
  initStocks: ({ commit }) => {
    commit('SET_STOCKS', stocks)
  },
  randomizeStocks: ({ commit }) => {
    commit('RND_STOCKS', stocks)
  }
}

const getters = {
  stocks: state => {
    return state.stocks
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
