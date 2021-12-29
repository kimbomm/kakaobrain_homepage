import data from './data/common.json'
export const state = () => ({
  menus: data.menus,
  footerMenu: data.footer,
  lang: 'ko',
  members: data.members,
  isFilterMenuOpen: false
})
export const getters = () => ({})
export const mutations = {
  setIsFilterMenuOpen(state, payload) {
    state.isFilterMenuOpen = payload
  }
}
export const actions = {
  changeFilterMenuOpen({ commit }, payload) {
    commit('setIsFilterMenuOpen', payload)
  }
}
