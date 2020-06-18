<template>
  <div>
    <div class="top-info" @click="toResume">
      <div class="avatar">
        <img src="../../assets/images/avatar.png" alt />
      </div>
      <div class="info">
        <div class="name">陈小姐姐</div>
        <div class="remuse-per">
          <div class="percentage-bar">
            <van-progress
              color="#FF8953"
              stroke-width="9"
              track-color="#f5f5f5"
              :percentage="50"
              :show-pivot="false"
            />
          </div>
          <div class="percentage-info">完善度：100%</div>
        </div>
        <p class="desc-tip">简历的完善度直接影响面试通过率</p>
      </div>
      <div class="editor">编辑简历 ></div>
    </div>
    <div class="nav">
      <div class="item">
        <div class="my-img">
          <img src="./images/refresh.png" alt />
        </div>
        <div class="title">刷新简历</div>
      </div>
      <div class="item" @click="toBrowser">
        <div class="my-img">
          <img src="./images/browser.png" alt />
        </div>
        <div class="title">预览简历</div>
      </div>
      <div class="item">
        <div class="my-img">
          <img src="./images/share.png" alt />
        </div>
        <div class="title">分享简历</div>
      </div>
    </div>
    <!-- banner -->
    <div class="wrap">
      <div class="content-title">
        <div class="vip">
          <img src="./images/vip.png" alt />
        </div>
        <div class="title">我的简历</div>
        <div class="perfect">
          去完善
          <img src="./images/right.png" alt />
        </div>
      </div>
      <p class="desc">简历的完善度直接影响面试通过率</p>
    </div>
    <!-- 信息 -->
    <div class="lists">
      <div class="item" @click="toCollect">
        <div class="my-img">
          <img src="./images/collect.png" alt />
        </div>
        <div class="title">职位收藏</div>
        <div class="to-right">
          <img src="./images/to-right.png" alt />
        </div>
      </div>
      <div class="item">
        <div class="my-img">
          <img src="./images/peak.png" alt />
        </div>
        <div class="title">职位订阅</div>
        <div class="to-right">
          <img src="./images/to-right.png" alt />
        </div>
      </div>
      <div class="item" @click="toHidden">
        <div class="my-img">
          <img src="./images/privacy.png" alt />
        </div>
        <div class="title">隐私设置</div>
        <div class="to-right">
          <img src="./images/to-right.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mine",
  methods: {
    toBrowser () { // 浏览简历
      this.$router.push("/resume/browser")
    },
    toResume () { // 编辑简历
      this.$router.push("/resume")
    },
    toCollect () { // 去收藏职位
      this.$router.push("/collect")
    },
    toHidden () { // 隐藏设置
      this.$router.push("/resume/hidden")
    }
  }
};
</script>


<style lang="scss" scoped>
.top-info {
  width: 100vw;
  padding: 0.3rem 0.3rem 0.3rem 0.3rem;
  box-sizing: border-box;
  display: flex;
  position: relative;
  overflow: hidden;
  .avatar {
    width: 1rem;
    margin-right: 0.1rem;
    margin-top: 0.1rem;
    img {
      display: block;
      width: 100%;
    }
  }
  .info {
    width: 4.3rem;
    .name {
      font-size: 0.32rem;
      color: #323232;
    }
    .remuse-per {
      margin: 0.15rem 0;
      display: flex;
      .percentage-bar {
        width: 2rem;
        margin-right: 0.16rem;
      }
      .percentage-info {
        font-size: 0.28rem;
      }
    }
    .desc-tip {
      color: #9a9a9a;
      font-size: 0.24rem;
    }
  }
  .editor {
    color: #9a9a9a;
    font-size: 0.28rem;
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
  }
}

.nav {
  width: 100vw;
  padding: 0 0.3rem 0.3rem 0.3rem;
  box-sizing: border-box;
  display: flex;
  border-top: 0.02rem solid #f5f5f5;
  overflow: hidden;
  border-bottom: 0.2rem solid #f5f5f5;
  .item {
    width: 2.1rem;
    display: flex;
    margin-right: 0.4rem;
    margin-top: 0.2rem;
    &:last-of-type {
      margin-right: 0;
    }
    .my-img {
      width: 0.5rem;
      margin-right: 0.16rem;
      img {
        width: 100%;
        display: block;
      }
    }
    .title {
      font-size: 0.32rem;
      line-height: 0.5rem;
      color: #9a9a9a;
    }
  }
}

.wrap {
  width: 6.9rem;
  margin: 0.3rem auto 0 auto;
  height: 2.3rem;
  background: url("./images/bg.png") no-repeat center;
  background-size: 100% 100%;
  border-radius: 0.1rem;
  overflow: hidden;
  padding: 0.3rem;
  box-sizing: border-box;
  .content-title {
    width: 100%;
    display: flex;
    position: relative;
    .vip {
      width: 0.4rem;
      margin-right: 0.2rem;
      img {
        display: block;
        width: 100%;
      }
    }
    .title {
      font-size: 0.32rem;
      line-height: 0.4rem;
      letter-spacing: 0.03rem;
      color: #fff;
    }
    .perfect {
      position: absolute;
      top: 0;
      right: 0;
      font-size: 0.3rem;
      color: #fff;
      img {
        width: 0.15rem;
        margin-left: 0.1rem;
      }
    }
  }
  .desc {
    line-height: 1rem;
    font-size: 0.3rem;
    color: #fff;
  }
}

.lists {
  width: 100vw;
  padding: 0 .3rem;
  box-sizing: border-box;
  .item {
    display: flex;
    position: relative;
    line-height: 1.2rem;
    .my-img{
      width: .36rem;
      margin-right: .3rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 1.2rem;
      img {
        width: 100%;
        display: block;
      }
    }
    .title {
      font-size: .28rem;
      color: #323232;
    }
    .to-right {
      position: absolute;
      top: 0;
      right: 0;
      width: .2rem;
      img {
        width: 100%;
      }
    }
  }
}



</style>