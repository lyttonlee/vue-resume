import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: router.options.routes,
    // nextPagePath: '',
    // lastPagePath: '',
    animateOptions: {},
    showArrow: true,
    info: {
      name: '思吾谓何思',
      avatar: 'https://img5.duitang.com/uploads/item/201411/24/20141124220354_RV4U4.jpeg',
      introduce: '博学之,审问之,慎思之,明辨之,笃行之',
      status: [
        {
          icon: 'icon-icon-',
          value: '四川'
        },
        {
          icon: 'icon-xueli',
          value: '本科'
        },
        {
          icon: 'icon-nianling',
          value: '32'
        },
        {
          icon: 'icon-zhiwei',
          value: '离职'
        }
      ]
    },
    skills: [
      {
        attr: 'Vue',
        value: 90
      },
      {
        attr: 'React',
        value: 70
      }
    ]
  },
  mutations: {
    // nextPage (state, data) {
    //   state.nextPagePath = data
    // },
    // lastPage (state, data) {
    //   state.lastPagePath = data
    // },
    changeAnimateDirection (state, data) {
      state.animateOptions = data
    },
    changeShowArrow (state) {
      state.showArrow = !state.showArrow
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
          // console.log(router)
          // router.push(nextPagePath)
        }
        // console.log(nextPagePath)
        const animateDirection = {
          leave: 'fadeOutDown',
          enter: 'fadeInDown',
          leaveTime: 1500,
          enterTime: 1500
        }
        commit('changeAnimateDirection', animateDirection)
        // commit('nextPage', nextPagePath)
        commit('changeShowArrow')
        resolve(nextPagePath)
        setTimeout(() => {
          commit('changeShowArrow')
        }, state.animateOptions.leaveTime + state.animateOptions.enterTime)
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
        const animateDirection = {
          leave: 'fadeOutUp',
          enter: 'fadeInUp',
          leaveTime: 1500,
          enterTime: 1500
        }
        commit('changeAnimateDirection', animateDirection)
        // commit('lastPage', lastPagePath)
        commit('changeShowArrow')
        resolve(lastPagePath)
        setTimeout(() => {
          commit('changeShowArrow')
        }, state.animateOptions.leaveTime + state.animateOptions.enterTime)
      })
    },
    clickRouteChange ({ commit, state }) {
      const animateDirection = {
        leave: 'zoomOut',
        enter: 'zoomIn',
        leaveTime: 1500,
        enterTime: 1500
      }
      commit('changeAnimateDirection', animateDirection)
      commit('changeShowArrow')
      setTimeout(() => {
        commit('changeShowArrow')
      }, state.animateOptions.leaveTime + state.animateOptions.enterTime)
    }
  }
})
