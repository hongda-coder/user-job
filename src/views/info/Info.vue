<template>
  <div>
    <div>
      <van-notice-bar
        left-icon="volume" background="#FEF2ED" color="#FF8854"
        text="完善简历可提高您的就业成功哦！" mode="closeable"
      />
    </div>

    <div class="nav">
      <van-grid :column-num="3" :border="false">
        <van-grid-item :icon="browser" text="谁看过我" @click="toReadMine" />
        <van-grid-item :icon="broad" text="招聘广播" @click="toAdvert" />
        <van-grid-item :icon="adverted" @click="toEvolve" text="面试进展" />
      </van-grid>
    </div> 
  <div class="info-lists">
    <div class="item" @click="toInfoDetails">
      <div class="avatar"><img src="./images/avatar.png" alt=""></div>
      <div class="info">
        <div class="info-top">
          <div class="name">即小姐</div>
          <div class="company">广州市志在信息科广州市志在信息科技广州市志在信息科技技</div>
          <div class="time">今天 12：00</div>
        </div>
        <div class="info-res">
          <div class="last-res state1">【面试结果】</div>
          <div class="res-content">恭喜您通过本次面试，成为我司</div>
        </div>
      </div>
    </div>
    <div class="item" @click="toInfoDetails">
      <div class="avatar"><img src="./images/avatar.png" alt=""></div>
      <div class="info">
        <div class="info-top">
          <div class="name">即小姐</div>
          <div class="company">广州市志在信息科广州市志在信息科技广州市志在信息科技技</div>
          <div class="time">今天 12：00</div>
        </div>
        <div class="info-res">
          <div class="last-res state1" style="margin-left: .1rem; color: #9a9a9a;">请耐心等待，</div>
          <div class="res-content">恭喜您通过本次面试，成为我司</div>
        </div>
      </div>
    </div>
  </div>
 
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      browser: require("./images/browser.png"),
      broad: require("./images/broad.png"),
      adverted: require("./images/adverted.png"),
    }
  },
   
  methods: {
    // 去详情页
    toInfoDetails () {
      this.$router.push('/info/details')
    },
    // 去看过我的页面
    toReadMine () {
      this.$router.push('/info/read')
    },
    // 去广告页面
    toAdvert () {
      this.$router.push('/info/advert')
    },
    // 去面试进展
    toEvolve () {
      this.$router.push('/info/evolve')
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  border-bottom: .2rem solid #F5F5F5;
}
.info-lists {
  width: 100vw;
  .item {
    padding: .2rem .3rem;
    box-sizing: border-box;
    display: flex;
    .avatar {
      width: .8rem;
      img {
        width: 100%;
      }
    }
    .info {
      flex: 1;
      .info-top {
        display: flex;
        .name {
          font-size: .32rem;
          color: #323232;
          margin-right: .25rem;
          margin-left: .1rem;
          line-height: .6rem;
        }
        .company {
          font-size: .28rem;
          color: #9A9A9A;
          line-height: .6rem;
          width: 3rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .time {
          flex: 1;
          text-align: right;
          font-size: .28rem;
          color: #9A9A9A;
          line-height: .6rem;
        }
      }
      .info-res {
        display: flex;
        flex-wrap: nowrap;
        .last-res {
          font-size: .28rem;
          white-space: nowrap;
          &.state1 {
            color: #6ADEA0;
          }
        }
        .res-content {
          font-size: .28rem;
          color: #9A9A9A;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>