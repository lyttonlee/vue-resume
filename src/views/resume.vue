<template>
  <div @mousewheel="mouseWheel">
    <v-touch class="resume" @swipedown="swipedown" @swipeup="swipeup">
      <div class="nav">
        <template v-for="(item, index) in this.$router.options.routes">
          <router-link :to="item.path" :key="index" exact><i @click="changeAnimation" class="iconfont icon-dian nav-item"></i></router-link>
        </template>
      </div>
      <div class="page">
        <transition
          mode="out-in"
          :duration="{ enter: animateOptions.enterTime, leave: animateOptions.leaveTime }"
          :leave-active-class="'animated ' + animateOptions.leave"
          :enter-active-class="'animated ' + animateOptions.enter">
          <router-view />
        </transition>
      </div>
      <div class="next">
        <!-- <Down :show="showArrow"/> -->
        <Down />
      </div>
    </v-touch>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import Down from '../components/down'
export default {
  // .
  components: {
    Down
  },
  data () {
    return {
      lastScroll: 0
      // showArrow: true
    }
  },
  computed: {
    ...mapState(['animateOptions'])
  },
  methods: {
    ...mapActions(['next', 'last', 'clickRouteChange']),
    changeAnimation () {
      this.clickRouteChange()
    },
    mouseWheel (event) {
      // 防止用户短时间内滚动多次，设置滚动间隔大于一秒才能生效
      // 判断滚动间隔时间
      let scrollDuration = event.timeStamp - this.lastScroll
      console.log(scrollDuration)
      if (scrollDuration > 3000) {
        // 将这一次的滚动时间记录为上一次合法的滚动时间
        this.lastScroll = event.timeStamp
        // console.log('合法的滚动')
        // 判断滚动方向进行操作
        if (event.deltaY > 0) {
          const presentPath = this.$route.path
          this.last(presentPath).then(nextPagePath => {
            this.$router.push(nextPagePath)
          })
        } else {
          const presentPath = this.$route.path
          this.next(presentPath).then(lastPagePath => {
            this.$router.push(lastPagePath)
          })
        }
      } else {
        // 如果滚动不合法就不做任何操作
        // console.log('请爱护你的鼠标不要连续滚动！')
      }
    },
    swipedown () {
      // console.log('down')
      const presentPath = this.$route.path
      this.last(presentPath).then(nextPagePath => {
        this.$router.push(nextPagePath)
      })
    },
    swipeup () {
      const presentPath = this.$route.path
      this.next(presentPath).then(lastPagePath => {
        this.$router.push(lastPagePath)
      })
    }
  }
}
</script>
<style lang="less" scoped>
@import '../common/main.less';
.active {
  color: @fontColor;
  font-size: 1.1rem;
}
.resume {
  width: 100vw;
  .nav {
    position: fixed;
    right: 10px;
    top: 45%;
    z-index: 100;
    .nav-item {
      display: block;
      font-size: 11px;
      padding: 3px 0;
    }
  }
  .page {
    background-color: @mainColor;
    height: 100vh;
    overflow: hidden;
  }
  .next {
    position: fixed;
    bottom: 5px;
    width: 100%;
  }
}
</style>
