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
  isFilterMenuOpen: false,
  breadcrumb: []
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
  },
  setBreadCrumb(state, payload) {
    this.breadcrumb = [...payload]
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
  },
  async getBreadCrumb({ commit }, payload) {
    commit('setBreadCrumb', payload)
  },
  async getCategoryList({}, payload) {
    let url = 'category/'
    if (payload.category1) url += `${payload.category1}/`
    if (payload.category1 && payload.category2) url += `${payload.category2}`

    const res = await this.$axios.get(url, payload)
    return res
  },
  getNickName({ state }, payload) {
    const menu = state.menus.filter(menu => menu.category === payload.category1)
    const sub = menu[0].sub.filter(item => item.category === payload.category2)
    return {
      category1: menu[0],
      category2: sub[0]
    }
  }
}
