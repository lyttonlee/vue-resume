<template>
  <div class="page-item section">
    <h2>Career</h2>
    <div class="career">
      <template v-for="(item, index) in career">
        <div class="item" :key="index">
          <h3 class="title">{{item.time}}</h3>
          <p class="text">{{item.text}}</p>
          <mu-divider></mu-divider>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {
  computed: {
    ...mapState(['career'])
  }
}
</script>
<style lang="less" scoped>
.section {
  background-color: rgba(3, 56, 11, 0.568) !important;
  .career {
    width: 95%;
    letter-spacing: 1px;
    .item {
      margin: 10px 0;
      padding: 0 10px;
      // background-color: rgba(23, 95, 59, 0.747);
      // box-shadow: 0 1px 1px #000;
      // border-radius: 10px;
      .title {
        margin: 0;
        text-align: left;
      }
      .text {
        color: rgb(170, 174, 179);
        text-align: left;
      }
    }
  }
}
</style>
