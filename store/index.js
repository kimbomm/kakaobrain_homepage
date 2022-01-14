import data from './data/common.json'

export const state = () => ({
  language: 'ko',
  menus: data.menus,
  footerMenu: data.footer,
  members: data.members,
  sns: data.sns,
  category: data.category,
  filter: [],
  filterList: [],
  touchDevice: false,
  isFilterMenuOpen: false
})
export const getters = {
  // newsCategory(state) {
  //   return state.category.news
  // }
}
export const mutations = {
  setIsFilterMenuOpen(state, payload) {
    state.isFilterMenuOpen = payload
  },
  setTouchDevice(state, payload) {
    state.touchDevice = payload
  },
  setLanguage(state, payload) {
    state.language = payload
  },
  setFilter(state, payload) {
    state.filter = payload
  },
  setFilterList(state, payload) {
    switch (payload) {
      case 'innovation':
        state.filterList = state.category['innovation']
        break
    }
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
  },
  getFilterList({ commit }, payload) {
    commit('setFilterList', payload)
  }
}
