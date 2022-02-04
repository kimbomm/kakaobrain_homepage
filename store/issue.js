import data from './data/monthly-issue.json'
export const state = () => ({
  // list: data.list
  list: []
})
export const getters = () => ({})
export const mutations = {
  setIssueList(state, paylaod) {
    state.list = paylaod
  }
}
export const actions = {
  async getIssueList({ commit }, payload) {
    const res = await this.$axios.get('monthly/issue', payload)
    // commit('setIssueList', res.data)
    return res
  }
}
