<template>
  <div class="page-item section">
    <h2>Profiles</h2>
    <mu-carousel class="carousel" :hide-controls="controls" :hide-indicators="indicators" :interval="interval"  transition="slide" :cycle="cycle">
      <template v-for="(profile, index) in profiles">
        <mu-carousel-item :key="index">
          <mu-container class="box">
            <mu-card class="card" style="width: 100%; margin: 0 auto;">
              <mu-card-header :title="profile.title" :sub-title="profile.subTitle" />
              <!-- <mu-card-media class="img">
                <img src="../assets/design.jpg">
              </mu-card-media> -->
              <mu-card-title :sub-title="'技术栈：' + profile.skills"></mu-card-title>
              <mu-card-text>
                {{profile.text}}
              </mu-card-text>
              <mu-card-actions><a :href="profile.github" target="_blank">
                  <mu-icon class="icon" value=":iconfont icon-GitHub"></mu-icon></a>
              </mu-card-actions>
            </mu-card>
          </mu-container>
        </mu-carousel-item>
      </template>
    </mu-carousel>
  </div>
</template>
<script>
import {
  mapState
} from 'vuex'
export default {
  data () {
    return {
      cycle: true,
      indicators: true,
      controls: false,
      interval: 10000
    }
  },
  computed: {
    ...mapState(['profiles'])
  }
}
</script>

<style lang="less" scoped>
.section {
  background-color: rgb(73, 80, 10) !important;
  color: #000;
  .carousel {
    // height: auto;
    min-height: 50vh;
    .mu-carousel-item {
      display: flex;
      justify-content: center;
      align-items: center;
      .box {
        width: 80%;
        .card {
          // background: rgba(63, 59, 27, 0.363);
          border-radius: 20px;
          background: #49500a;
          box-shadow:  15px 15px 30px #2f3306, 
                      -15px -15px 30px #636d0e;
          &:hover {
            box-shadow: inset 15px 15px 30px #2f3306, 
                        inset -15px -15px 30px #636d0e;
          }
          .mu-card-header {
            padding-bottom: 0;
          }
          .mu-card-header-title {
            padding: 0;
            width: 100%;
          }
          .mu-card-title {
            width: 100%;
            color: rgb(0, 0, 0);
            font-size: 1.3rem;
            text-align: left;
          }
          .mu-card-sub-title {
            color: rgb(19, 19, 19);
            text-align: left;
          }
          .mu-card-text {
            padding: 0 16px;
            // letter-spacing: .07rem;
            letter-spacing: 1px;
            color: rgb(0, 0, 0);
            text-align: left;
          }
          .mu-card-actions {
            padding: 0;
            .icon {
              font-size: 30px;
              color: #000;
            }
          }
          .img {
            @media screen and (min-width: 960px) {
              display: none;
            }
          }
        }
      }
    }
  }
}
</style>
