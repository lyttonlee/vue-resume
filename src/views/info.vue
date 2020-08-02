<template>
  <div class="page-item section">
    <h2>Info</h2>
    <div class="avatar">
      <img class="img" :src="info.avatar">
    </div>
    <h4>{{info.name}}</h4>
    <h3>{{info.introduce}}</h3>
    <div class="exp">{{info.exp}}</div>
    <mu-container class="papers">
      <template v-for="(item, index) in info.status">
        <mu-paper :key="index" class="paper" circle :z-depth="4">
          <i :class="`iconfont ${item.icon}`"></i>
          <div class="title">{{item.value}}</div>
        </mu-paper>
      </template>
    </mu-container>
  </div>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {
  // ..
  computed: {
    ...mapState(['info'])
  }
}
</script>

<style lang="less" scoped>
.section {
  background-color: rgb(20, 73, 73) !important;
  .avatar {
    overflow: hidden;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    background-color: rgb(20, 73, 73);
    box-shadow:  inset 11px 11px 22px #0f3838, 
            inset -11px -11px 22px #195a5a;
    .img {
      margin: 20px 0;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      border: 3px solid #0f3838;
    }
  }
  .papers {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .paper {
      margin: 15px;
      width: 80px;
      height: 80px;
      color: rgba(192, 200, 207, 0.822);
      background-color: rgb(20, 73, 73);
      box-shadow:  5px 5px 10px #114040, 
             -5px -5px 10px #175252;
      .iconfont {
        height: 80px;
        line-height: 80px;
        font-size: 40px;
      }
      .title {
        font-size: .9rem;
        margin: 5px 0;
        color: rgba(192, 200, 207, 0.514);
      }
    }
  }
}
</style>
