import Vue from 'vue'

export const loadData = async ({ commit }) => {
  try {
    const res = await Vue.http.get('data.json')
    const data = await res.json()
    if (data) {
      const stocks = data.stocks
      const portfolio = {
        funds: data.funds,
        portfolio: data.portfolio
      }

      commit('SET_STOCKS', stocks)
      commit('SET_PORTFOLIO', portfolio)
    }
  } catch (e) {
    console.log(e)
  }

}
