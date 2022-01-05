import data from './data/innovation.json'
export const state = () => ({
  list: data.list
})
export const getters = {
  getRecentList(state) {
    return state.list.filter((item, index) => index < 10)
  }
}
export const mutations = () => ({})
export const actions = () => ({})
