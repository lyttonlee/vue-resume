import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: router.options.routes,
    nextPagePath: '',
    lastPagePath: ''
  },
  mutations: {
    nextPage (state, data) {
      state.nextPagePath = data
    },
    lastPage (state, data) {
      state.lastPagePath = data
    }
  },
  actions: {
    next ({ commit, state }, presentPath) {
      return new Promise(resolve => {
        // console.log(presentPath)
        // 获取当前页面路径在整体路由的位置
        const index = state.routes.findIndex(route => route.path === presentPath)
        // 获取当前路由的下一个路由路径
        let nextPagePath
        if (index + 1 === state.routes.length) {
          nextPagePath = state.routes[0].path
        } else {
          nextPagePath = state.routes[index + 1].path
        }
        // console.log(nextPagePath)
        commit('nextPage', nextPagePath)
        resolve(nextPagePath)
      })
    },
    last ({ commit, state }, presentPath) {
      return new Promise(resolve => {
        // console.log(presentPath)
        // 获取当前页面路径在整体路由的位置
        const index = state.routes.findIndex(route => route.path === presentPath)
        // 获取当前路由的上一个路由路径
        let lastPagePath
        if (index === 0) {
          const routesLength = state.routes.length
          lastPagePath = state.routes[routesLength - 1].path
        } else {
          lastPagePath = state.routes[index - 1].path
        }
        // console.log(lastPagePath)
        commit('lastPage', lastPagePath)
        resolve(lastPagePath)
      })
    }
  }
})
