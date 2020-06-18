<template>
  <div class="Evolve">
    <div>
      <div class="item">
        <div class="job-top">
          <div class="name">前端工程师</div>
          <div class="state success">面试成功</div>
        </div>
        <div class="job-top">
          <div class="company">广州市志在信息科技有限公司</div>
          <div class="time">2020-08-09 11:20</div>
        </div>
      </div>
      <div class="item">
        <div class="job-top">
          <div class="name">前端工程师</div>
          <div class="state fail">面试不通过</div>
        </div>
        <div class="job-top">
          <div class="company">广州市志在信息科技有限公司</div>
          <div class="time">2020-08-09 11:20</div>
        </div>
      </div>
      <div class="item">
        <div class="job-top">
          <div class="name">前端工程师</div>
          <div class="state wait">等待面试</div>
        </div>
        <div class="job-top">
          <div class="company">广州市志在信息科技有限公司</div>
          <div class="time">2020-08-09 11:20</div>
        </div>
      </div>
      <div class="item">
        <div class="job-top">
          <div class="name">前端工程师</div>
          <div class="state wait">面试结束</div>
        </div>
        <div class="job-top">
          <div class="company">广州市志在信息科技有限公司</div>
          <div class="time">2020-08-09 11:20</div>
        </div>
      </div>
      <div class="item">
        <div class="job-top">
          <div class="name">前端工程师</div>
          <div class="state fail">面试拒绝</div>
        </div>
        <div class="job-top">
          <div class="company">广州市志在信息科技有限公司</div>
          <div class="time">2020-08-09 11:20</div>
        </div>
      </div>
      <div class="item">
        <div class="job-top">
          <div class="name">前端工程师</div>
          <div class="state success">面试成功</div>
        </div>
        <div class="job-top">
          <div class="company">广州市志在信息科技有限公司</div>
          <div class="time">2020-08-09 11:20</div>
        </div>
      </div>
      <div class="item">
        <div class="job-top">
          <div class="name">前端工程师</div>
          <div class="state fail">面试不通过</div>
        </div>
        <div class="job-top">
          <div class="company">广州市志在信息科技有限公司</div>
          <div class="time">2020-08-09 11:20</div>
        </div>
      </div>
      <div class="item">
        <div class="job-top">
          <div class="name">前端工程师</div>
          <div class="state wait">等待面试</div>
        </div>
        <div class="job-top">
          <div class="company">广州市志在信息科技有限公司</div>
          <div class="time">2020-08-09 11:20</div>
        </div>
      </div>
      <div class="item">
        <div class="job-top">
          <div class="name">前端工程师</div>
          <div class="state wait">面试结束</div>
        </div>
        <div class="job-top">
          <div class="company">广州市志在信息科技有限公司</div>
          <div class="time">2020-08-09 11:20</div>
        </div>
      </div>
      <div class="item">
        <div class="job-top">
          <div class="name">前端工程师</div>
          <div class="state fail">面试拒绝</div>
        </div>
        <div class="job-top">
          <div class="company">广州市志在信息科技有限公司</div>
          <div class="time">2020-08-09 11:20</div>
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
  name: 'Evolve',
   methods: {
    back () {
      this.$router.push("/info")
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    width: 100vw;
    padding: .3rem;
    box-sizing: border-box;
    border-bottom: .2rem solid #F5F5F5;
    &:last-of-type {
      margin-bottom: 1.2rem;
    }
    .job-top {
      display: flex;
      justify-content: space-between;
      line-height: .5rem;
      .name {
        font-size: .32rem;
        color: #323232;
      }
      .state {
        font-size: .28rem;
        &.success {
          color: #6ADEA0;
        }
        &.fail {
          color: #FF3636;
        }
        &.wait {
          color: #FF8953;
        }
      }
      .company {
        font-size: .28rem;
        color: #323232;
      }
      .time {
        font-size: .24rem;
        color: #999999;
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
</style>