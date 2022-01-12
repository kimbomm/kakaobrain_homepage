import data from './data/common.json'

export const state = () => ({
  menus: data.menus,
  footerMenu: data.footer,
  language: 'ko',
  members: data.members,
  sns: data.sns,
  touchDevice: false,
  isFilterMenuOpen: false
})
export const getters = {}
export const mutations = {
  setIsFilterMenuOpen(state, payload) {
    state.isFilterMenuOpen = payload
  },
  setTouchDevice(state, payload) {
    state.touchDevice = payload
  },
  setLanguage(state, payload) {
    state.language = payload
  }
}
export const actions = {
  changeFilterMenuOpen({ commit }, payload) {
    commit('setIsFilterMenuOpen', payload)
  },
  async getContentDetail({}, payload) {
    const res = await this.$axios.get(`/content/${payload}`)
    // console.log('RES::', res)
    return res
  }
}
