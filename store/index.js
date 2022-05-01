import data from './data/common.js'
import utility from '/util/utility.js'
import cookie from 'js-cookie'

const language = cookie.get('bran_language')
export const state = () => ({
  language: language || 'EN',
  isDark: true,
  isMenuOpen: false,
  menus: data.menus,
  footerMenu: data.footer,
  sns: data.sns,
  count: {
    research: 0,
    tech: 0,
    document: 0,
    log_b: 0
  },
  filter: [],
  filterList: [],
  touchDevice: false,
  isFilterMenuOpen: false,
  breadcrumb: [],
  isScrollUp: false,
  device: {
    touch: false,
    mobile: false
  }
})

export const mutations = {
  setIsDark(state, payload) {
    state.isDark = payload
  },
  setIsFilterMenuOpen(state, payload) {
    state.isFilterMenuOpen = payload
  },
  setTouchDevice(state, payload) {
    state.device = Object.assign(state.device, payload)
  },
  setLanguage(state, payload) {
    state.language = payload
  },
  setFilter(state, payload) {
    state.filter = payload
  },
  setFilterList(state, payload) {
    state.filterList = payload
  },
  setBreadCrumb(state, payload) {
    state.breadcrumb = [...payload]
  },
  setIsScrollUp(state, payload) {
    state.isScrollUp = payload
  },
  setIsMenuOpen(state, payload) {
    state.isMenuOpen = payload
  },
  setCategoryCount(state, payload) {
    state.count[payload.category] = payload.count
  }
}
export const actions = {
  changeFilterMenuOpen({ commit }, payload) {
    commit('setIsFilterMenuOpen', payload)
  },
  async getCount({ commit }, payload) {
    const params = utility.setParameters(payload.pageData)
    const res = await this.$axios.get(
      `/category/${payload.category1}?${params}`
    )
    commit('setCategoryCount', {
      category: payload.category1,
      count: res.data.count
    })
    // console.log(res.data)
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
    let url = '/category/'
    if (payload.category1) url += `${payload.category1}/`
    if (payload.category1 && payload.category2) url += `${payload.category2}`

    const params = utility.setParameters(payload.pageData)
    const res = await this.$axios.get(`${url}?${params}`)
    return res
  },
  getNickName({ state }, payload) {
    const menu = state.menus.filter(menu => menu.category === payload.category1)
    const sub = menu[0].sub.filter(item => item.category === payload.category2)
    return {
      category1: menu[0],
      category2: sub[0]
    }
  },
  async getMonthlyList({}, payload) {
    const params = utility.setParameters(payload)
    const res = await this.$axios.get(`/monthly/issue?${params}`)
    return res
  },
  async getMainGridList({}, payload) {
    const params = utility.setParameters(payload)
    const res = await this.$axios.get(`/main/content?${params}`)
    return res
  },
  async getContentList({}, payload) {
    const params = utility.setParameters(payload)
    const res = await this.$axios.get(`/category?${params}`)
    return res
  },
  async getTags({}, payload) {
    const params = utility.setParameters(payload)
    const res = await this.$axios.get(`/tag?${params}`)
    return res
  },
  async getLibraryCategory({}, payload) {
    const params = utility.setParameters(payload.params)
    const res = await this.$axios.get(`/library/${payload.category}?${params}`)
    return res
  }
}
