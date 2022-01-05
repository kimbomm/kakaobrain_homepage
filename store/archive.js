import data from './data/archive.json'
export const state = () => ({
  list: data.list
})
export const getters = {
  getRecentList(state) {
    return state.list.filter((item, index) => index < 5)
  }
}
export const mutations = () => ({})
export const actions = () => ({})
