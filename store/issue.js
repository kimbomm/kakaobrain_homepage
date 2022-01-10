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
  getIssueList({ commit }, payload) {
    const res = this.$axios.get('monthly/issue', payload)
    commit('setIssueList', res)
  }
}
