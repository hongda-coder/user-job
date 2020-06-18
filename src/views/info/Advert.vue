<template>
  <div class="advert">
    <div class="item">
      <div class="time">2020年5月29日 18:20</div>
      <div class="banner"><img src="./images/adverte-banner.png" alt=""></div>
      <div class="content">
        <h2 class="title">招聘旺季，历届大型网络招聘会等你来！</h2>  
        <p class="desc">跳槽，你准备好了吗？6月15日至6月18日，与你相约聚招第21期网络招聘会~~</p>
      </div> 
    </div>
    <div class="item">
      <div class="time">2020年5月29日 18:20</div>
      <div class="banner"><img src="./images/adverte-banner.png" alt=""></div>
      <div class="content">
        <h2 class="title">招聘旺季，历届大型网络招聘会等你来！</h2>  
        <p class="desc">跳槽，你准备好了吗？6月15日至6月18日，与你相约聚招第21期网络招聘会~~</p>
      </div> 
    </div>
    <div class="footer"> 
      <div class="back" @click="back">返回</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Advert',
  methods: {
    back () {
      this.$router.push("/info")
    }
  }
}
</script>

<style lang="scss" scoped>
.advert {
  width: 100%;
  height: 100%;
  background: #F5F5F5;
  padding: 0 .3rem;
  box-sizing: border-box;
  .item {
    width: 6.9rem;
    margin: auto;
    border-radius: .1rem;
    overflow: hidden;
    .time {
      font-size: .32rem;
      line-height: .75rem;
      text-align: center;
      color: #9a9a9a;
    }
    .banner {
      width: 100%;
      border-top-left-radius: .1rem;
      border-top-right-radius: .1rem;
      overflow: hidden;
      img {
        width: 100%;
        display: block;
      }
    }
    .content {
      width: 6.9rem;
      padding: 0 .3rem .3rem .3rem;
      box-sizing: border-box;
      background: #fff;
      .title {
        font-size: .32rem;
        color: #323232;
        line-height: .8rem;
      }
      .desc {
        font-size: .28rem;
        color: #323232;
        line-height: .48rem;
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    background: #fff;
    width: 100vw;
    padding:  0 .3rem;
    box-sizing: border-box;
    height: 1rem;
    display: flex;
    border-top: .02rem solid #ccc;
    .back {
      width: 6.9rem;
      line-height: .7rem;
      height: .7rem;
      border: 1px solid #ccc;
      font-size: .34rem;
      margin-top: .1rem;
      text-align: center;
      color: #9A9A9A;
      background: #fafafa;
      border-radius: .1rem;
      margin-right: .2rem;
    }
  }
}

</style>