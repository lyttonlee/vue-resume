import Vue from 'vue'
import Vuex from 'vuex'
import router from './router'
import shuffle from 'shuffle-array'

import { info, skills, profiles, career, contact } from './data/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: router.options.routes,
    animateOptions: {},
    showArrow: true,
    info,
    skills,
    profiles,
    career,
    contact
  },
  mutations: {
    // 改变切换路由页面的过度动画
    changeAnimateDirection (state, data) {
      state.animateOptions = data
    },
    // 控制是否显示下一页的箭头
    changeShowArrow (state) {
      state.showArrow = !state.showArrow
    },
    // 重排序 skills[]
    changeSkillsList (state, data) {
      state.skills = data
    }
  },
  actions: {
    // 下一页  =====> 鼠标滚轮向下滚动 或 向下滑动（移动端）
    next ({ commit, state }, presentPath) {
      return new Promise(resolve => {
        // console.log(presentPath)
        // 获取当前页面路径在整体路由的位置
        const index = state.routes.findIndex(route => route.path === presentPath)
        // 获取当前路由的下一个路由路径
        let nextPagePath
        if (index === 0) {
          const routesLength = state.routes.length
          nextPagePath = state.routes[routesLength - 1].path
        } else {
          nextPagePath = state.routes[index - 1].path
        }
        // console.log(nextPagePath)
        const animateDirection = {
          leave: 'fadeOutDown',
          enter: 'fadeInDown',
          leaveTime: 750,
          enterTime: 750
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
    // 上一页 鼠标滚轮向上滚动 或 向上滑动（移动端）
    last ({ commit, state }, presentPath) {
      return new Promise(resolve => {
        // console.log(presentPath)
        // 获取当前页面路径在整体路由的位置
        const index = state.routes.findIndex(route => route.path === presentPath)
        // 获取当前路由的上一个路由路径
        let lastPagePath
        if (index + 1 === state.routes.length) {
          lastPagePath = state.routes[0].path
        } else {
          lastPagePath = state.routes[index + 1].path
          // console.log(router)
          // router.push(nextPagePath)
        }
        // console.log(lastPagePath)
        const animateDirection = {
          leave: 'fadeOutUp',
          enter: 'fadeInUp',
          leaveTime: 750,
          enterTime: 750
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
    // 点击小圆点切换页面
    clickRouteChange ({ commit, state }) {
      const animateDirection = {
        leave: 'zoomOut',
        enter: 'zoomIn',
        leaveTime: 750,
        enterTime: 750
      }
      commit('changeAnimateDirection', animateDirection)
      commit('changeShowArrow')
      setTimeout(() => {
        commit('changeShowArrow')
      }, state.animateOptions.leaveTime + state.animateOptions.enterTime)
    },
    // 重排序技能页面的 skills[]
    shuffleSkills ({ commit, state }) {
      const newSkills = shuffle(state.skills, { 'copy': true })
      // console.log(newSkills === state.skills)
      commit('changeSkillsList', newSkills)
    }
  }
})
