<template>
  <div class="next" v-show="showArrow">
    <i @click="toNext" class="iconfont icon-xiala3 arrow"></i>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
export default {
  // ..
  // props: {
  //   show: {
  //     type: Boolean,
  //     required: true
  //   }
  // },
  data () {
    return {
      // showArrow: this.show
    }
  },
  computed: {
    ...mapState(['showArrow'])
  },
  methods: {
    ...mapActions(['next']),
    toNext () {
      // this.showArrow = false
      const presentPath = this.$route.path
      this.next(presentPath).then(nextPagePath => {
        this.$router.push(nextPagePath)
        // setTimeout(() => {
        //   this.showArrow = true
        // }, 3000)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.next {
  animation: arrow-animate 2s infinite;
  .arrow {
    color: rgba(9, 58, 65, 0.7);
    font-size: 30px;
    cursor: pointer;
  }
}
@keyframes arrow-animate {
  0% {bottom: 20px}
  // 25% {bottom: 24px}
  50% {bottom: 15px}
  // 75% {bottom: 12px}
  100% {bottom: 10px}
}
</style>
