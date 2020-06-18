<template>
  <div>
    <div>
      <div class="item">
        <div class="job-info-top">
          <div class="job-name">前段工程师</div>
          <div class="job-salary">6-8k</div>
        </div>
        <div class="job-req">
          <span>广州海珠区</span>
          <span>1-3年</span>
          <span>本科</span>
        </div>
        <div class="job-wef">
          <div class="first">福利标签</div>
          <div class="second">福利标签</div>
        </div>
        <div class="company-info">
          <div class="company-log">
            <img src="./images/company-logo.png" alt />
          </div>
          <div class="company-name">广州志在信息科技有限公司</div>
          <div class="send">2020-08-09 11:20</div>
        </div>

        <div class="options">
          <div class="cancle-collect">取消收藏</div>
          <div class="send-resume">投递简历</div>
        </div>
      </div>
      <div class="item">
        <div class="job-info-top">
          <div class="job-name">前段工程师</div>
          <div class="job-salary">6-8k</div>
        </div>
        <div class="job-req">
          <span>广州海珠区</span>
          <span>1-3年</span>
          <span>本科</span>
        </div>
        <div class="job-wef">
          <div class="first">福利标签</div>
          <div class="second">福利标签</div>
        </div>
        <div class="company-info">
          <div class="company-log">
            <img src="./images/company-logo.png" alt />
          </div>
          <div class="company-name">广州志在信息科技有限公司</div>
          <div class="send">2020-08-09 11:20</div>
        </div>

        <div class="options">
          <div class="cancle-collect">取消收藏</div>
          <div class="send-resume">投递简历</div>
        </div>
      </div>
    </div>

    <div class="footer">
      <div class="back" @click="back">返回</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Collect",
  methods: {
      back () {
          this.$router.push("/mine")
      }
  }
};
</script>

<style lang="scss" scoped>
.item {
  width: 100%;
  padding: 0 0.3rem;
  box-sizing: border-box;
  border-bottom: 0.2rem solid #f5f5f5;
  &:last-of-type {
    margin-bottom: 1.5rem;
  }
  .job-info-top {
    display: flex;
    justify-content: space-between;
    margin-top: 0.2rem;
    .job-name {
      font-size: 0.32rem;
      color: #323232;
    }
    .job-salary {
      font-size: 0.28rem;
      color: #ff3636;
    }
  }
  .job-req {
    margin: 0.16rem 0;
    display: flex;
    span {
      font-size: 0.28rem;
      display: block;

      color: #9a9a9a;
      position: relative;
      margin-right: 0.4rem;
      &:last-of-type {
        &::after {
          background: transparent;
        }
      }
      &::after {
        content: "";
        display: block;
        width: 0.02rem;
        height: 0.2rem;
        background: #9a9a9a;
        position: absolute;
        top: 0.06rem;
        right: -0.28rem;
      }
    }
  }
  .job-wef {
    display: flex;
    justify-content: left;
    .first {
      border: 1px solid #6adea0;
      font-size: 0.24rem;
      line-height: 0.32rem;
      color: #6adea0;
      padding: 0 0.1rem;
      box-sizing: border-box;
      margin-right: 0.1rem;
    }
    .second {
      border: 1px solid #5193ff;
      font-size: 0.24rem;
      line-height: 0.32rem;
      color: #5193ff;
      padding: 0 0.1rem;
      box-sizing: border-box;
      margin-right: 0.1rem;
    }
  }
  .company-info {
    display: flex;
    justify-content: left;
    margin-top: 0.2rem;
    .company-log {
      width: 0.6rem;
      margin-right: 0.2rem;
      margin-top: 0.1rem;
      img {
        display: block;
        width: 100%;
      }
    }
    .company-name {
      color: #707070;
      font-size: 0.28rem;
      line-height: 0.8rem;
    }
    .send {
      flex: 1;
      text-align: right;
      font-size: 0.28rem;
      color: #9a9a9a;
      line-height: 0.8rem;
    }
  }
  .options {
    display: flex;
    justify-content: space-between;
    margin-top: 0.2rem;
    border-top: 0.02rem solid #f5f5f5;
    line-height: 0.8rem;
    .cancle-collect {
      width: 50%;
      text-align: center;
      color: #9a9a9a;
      font-size: 0.28rem;
      position: relative;
      &::after {
        display: block;
        content: "";
        width: 0.02rem;
        height: 0.32rem;
        background: #f5f5f5;
        position: absolute;
        top: 0.2rem;
        right: 0;
      }
    }
    .send-resume {
      width: 50%;
      text-align: center;
      color: #ff8953;
      font-size: 0.28rem;
    }
  }
}
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
  width: 100vw;
  padding: 0 0.3rem;
  box-sizing: border-box;
  height: 1rem;
  display: flex;
  border-top: 0.02rem solid #ccc;
  .back {
    width: 6.9rem;
    line-height: 0.7rem;
    height: 0.7rem;
    border: 1px solid #ccc;
    font-size: 0.34rem;
    margin-top: 0.1rem;
    text-align: center;
    color: #9a9a9a;
    background: #fafafa;
    border-radius: 0.1rem;
    margin-right: 0.2rem;
  }
}
</style>