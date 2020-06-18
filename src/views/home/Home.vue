<template>
  <div class="home">
    <div class="search">
      <input v-model="search" placeholder="搜索职位/公司" />
    </div>
    <div class="home-banner">
      <img src="./images/home-banner.png" alt />
    </div>
    <div class="adverte">
      <div class="img">
        <img src="./images/adverte.png" alt />
      </div>
      <div class="title">完善简历可提高就业成功率！</div>
      <div class="perfect">
        <button>去完善</button>
      </div>
      <div class="close">
        <img src="./images/close.png" alt />
      </div>
    </div>

    <div class="my-tab">
      <ul class="nav">
        <li  @click="currnet=0" :class="{active:currnet==0}">推荐</li>
        <li  @click="currnet=1" :class="{active:currnet==1}">订阅</li>
      </ul>
      <div class="select">
        <van-button type="primary" size="mini" text="广州" @click="show = true" />
        <van-overlay :show="show" @click="show = false" />
      </div>
      
    </div>

    <div class="tab-content">
      <div v-show="currnet==0" class="tab-lsts">
        <JobItem />
      </div>
      <div v-show="currnet==1" class="tab-lsts"><JobItem /></div>
    </div>
  </div>
</template>

<script>
import JobItem from './children/JobItem'
export default {
  name: "Home",
  data() {
    return {
      search: "",
      currnet:0,
      show: false,
    };
  },
  components: {
    JobItem
  }
};
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
  .search {
    width: 100vw;
    margin: auto;
    padding: 0.2rem .3rem;
    box-sizing: border-box;
    position: fixed;
    background: #fff;
    z-index: 99;
    input {
      width: 100%;
      font-size: 0.28rem;
      line-height: 0.6rem;
      padding: 0 0.3rem;
      box-sizing: border-box;
      background: #f5f5f5;
      text-align: center;
      display: block;
      box-sizing: border-box;
    }
  }
  .home-banner {
    width: 100vw;
    margin-top: 1rem;
    img {
      width: 100%;
    }
  }
  .adverte {
    width: 6.9rem;
    margin: 0.2rem auto;
    position: relative;
    display: flex;
    justify-content: left;
    overflow: hidden;
    border: 2px solid $border-color;
    height: 1.3rem;
    line-height: 1.3rem;
    border-radius: 0.1rem;
    .img {
      width: 1.3rem;
      margin: 0 0.2rem;
      img {
        width: 100%;
      }
    }
    .title {
      width: 3.68rem;
      font-size: 0.28rem;
    }
    .perfect {
      width: 1.3rem;
      display: flex;
      align-items: center;
      button {
        display: block;
        width: 100%;
        border-radius: 0.5rem;
        border: none;
        background: $bg-color;
        line-height: 0.43rem;
        height: 0.43rem;
        text-align: center;
        color: #fff;
        font-size: 0.28rem;
      }
    }
    .close {
      position: absolute;
      right: 0;
      top: 0;
      width: 0.3rem;
      height: 0.3rem;
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .my-tab {
    width: 100vw;
    padding: 0 0.3rem;
    display: flex;
    justify-content: space-between;
    line-height: .82rem;
    position: relative;
    box-sizing: border-box;
    .nav {
      width: 2rem;
      text-align: center;
      display: flex;
      font-size: .28rem;
      display: flex;
      justify-content: space-between;
      li {
        width: 50%;
        color: #959595;
      }
      .active {
        color: #323232;
      }
    }
    .select {
      display: flex;
      align-items: center;
    }
    &::after {
      position: absolute;
      left: 0;
      top: 0;
      content: "";
      width: 100vw;
      height: 1px;
      background: $border-color;
    }
    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      content: "";
      width: 100vw;
      height: 1px;
      background: $border-color;
      z-index: 999;
    }
  }
  .tab-content {
    width: 100vw;
    font-size: .3rem;

    .tab-lsts {
      width: 100%;
      overflow: hidden;

    }
  }
}

</style>