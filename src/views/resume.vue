<template>
  <div @mousewheel="mouseWheel">
    <v-touch class="resume" @swipedown="swipedown" @swipeup="swipeup">
      <div class="nav">
        <template v-for="(item, index) in this.$router.options.routes">
          <router-link :to="item.path" :key="index" exact><li></li></router-link>
        </template>
      </div>
      <div class="page">
        <transition
          mode="out-in"
          :duration="{ enter: 2500, leave: 1500 }"
          leave-active-class="animated bounceOutRight"
          enter-active-class="animated tada">
          <router-view />
        </transition>
      </div>
    </v-touch>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  // .
  data () {
    return {
      lastScroll: 0
    }
  },
  methods: {
    ...mapActions(['next', 'last']),
    mouseWheel (event) {
      // 防止用户短时间内滚动多次，设置滚动间隔大于一秒才能生效
      // 判断滚动间隔时间
      let scrollDuration = event.timeStamp - this.lastScroll
      console.log(scrollDuration)
      if (scrollDuration > 1000) {
        // 将这一次的滚动时间记录为上一次合法的滚动时间
        this.lastScroll = event.timeStamp
        console.log('合法的滚动')
        // 判断滚动方向进行操作
        if (event.deltaY > 0) {
          const presentPath = this.$route.path
          this.next(presentPath).then(nextPagePath => {
            this.$router.push(nextPagePath)
          })
        } else {
          const presentPath = this.$route.path
          this.last(presentPath).then(lastPagePath => {
            this.$router.push(lastPagePath)
          })
        }
      } else {
        // 如果滚动不合法就不做任何操作
        console.log('请爱护你的鼠标不要连续滚动！')
      }
    },
    swipedown () {
      console.log('down')
      const presentPath = this.$route.path
      this.next(presentPath).then(nextPagePath => {
        this.$router.push(nextPagePath)
      })
    },
    swipeup () {
      const presentPath = this.$route.path
      this.last(presentPath).then(lastPagePath => {
        this.$router.push(lastPagePath)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.active {
  color: white;
  font-size: 1.1rem;
}
.resume {
  width: 100vw;
  .nav {
    position: fixed;
    right: 10px;
    top: 50%;
  }
  .page {
    background-color: rgba(109, 172, 201, .5);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
