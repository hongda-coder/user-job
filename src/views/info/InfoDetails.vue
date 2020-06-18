<template>
  <div>
    <div class="company">
      <div class="avatar"><img src="./images/avatar.png" alt=""></div>
      <div class="name-info">
        <div class="name"> 陈小姐姐 <span class="hr"> 人事经理</span> </div>
        <div class="company-name">广州市志在信息科技有限公司</div>
      </div>

      <div class="need">
        <div class="count">
          2个
        </div>
        <div class="jobing"> 在招职位 <img src="./images/right.png" alt=""> </div>
      </div>
    </div>
    <div class="job">
      <div class="name">前端工程师</div>
      <div class="salary">6k-10k</div>
    </div>
    <div class="job-req"><span>广州天河</span><span>3年</span><span>本科</span></div>
    <div class="job-wef">
      <div class="first">福利标签</div>
      <div class="second">福利标签</div>
    </div>
    <div class="job-desc">
      <div class="desc-title">岗位描述：</div>
      <div class="des-details">
        1.岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述；<br>
        1.岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述岗位描述...
      </div>
    </div>
    <div class="job-desc">
      <div class="desc-title">面试邀请：</div>
      <div class="des-details">
        您好！由于您出众的专业能力和优秀的综合素质，现特邀您于2020年5月12日 10：00来参加我司【岗位名称】的面试。
      </div>
    </div>


    <div class="footer"> 
      <div class="back" @click="back">返回</div>
      <div class="save">知道了</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InfoDetails',
  data () {
    return  {

    }
  },
  methods: {
    back () {
      this.$router.push("/info")
    }
  } 
}
</script>


<style lang="scss" scoped>
  .company {
    display: flex;
    width: 100vw;
    padding: 0 .3rem;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    border-bottom: .2rem solid #F5F5F5;
    .avatar {
      width: .8rem;
      margin-right: .2rem;
      margin-top: .2rem;
      img {
        width: 100%;
      }
    }
    .name-info {
      margin-top: .2rem;
      .name {
        color: #323232;
        font-size: .3rem;
      }
      .hr {
        display: inline-block;
        font-size: .24rem;
        background: #FFF1EA;
        color: #FF8954;
        line-height: .38rem;
        padding: 0 .1rem;
        box-sizing: border-box;
        margin-left: .2rem;
      }
      .company-name {
        color: #9a9a9a;
        font-size: .28rem;
        line-height: .6rem;
      }
    }
    .need {
      position: absolute;
      top: .2rem;
      right: .3rem;
      float: right;
      &::after {
        position: absolute;
        display: block;
        content: "";
        top: .1rem;
        left: -.5rem;
        width: .02rem;
        height: .52rem;
        background: #CCCCCC;
      }
      .count {
        width: 100%;
        text-align: center;
        font-size: .32rem;
        letter-spacing: .03rem;
        color: #FF986E;
      }
      .jobing {
        font-size: .28rem;
        color: #9A9A9A;
        line-height: .6rem;
        img {
          width: .1rem;
          height: .2rem;
        }
      }
    }
  }
  .job {
    width: 100vw;
    padding: 0 .3rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-top: .3rem;
    .name {
      font-size: .32rem;
      color: #323232;
    }
    .salary {
      color: #FF3636;
      font-size: .28rem;
    }
  }
  .job-req {
    width: 100vw;
    padding: 0 .3rem;
    box-sizing: border-box;
    display: flex;
    line-height: .6rem;
    span {
      display: block;
      font-size: .28rem;
      color: #9A9A9A;
      position: relative;
      margin-right: .4rem;
      &:last-of-type {
        &::after{
          background: transparent;
        }
      }
      &::after {
          content: "";
          display: block;
          width: .02rem;
          height: .2rem;
          background: #9a9a9a;
          position: absolute;
          top: .2rem;
          right: -.2rem;
        }
    }
  }
  .job-wef {
    display: flex;
    justify-content: left;
    width: 100vw;
    padding: 0 .3rem;
    box-sizing: border-box;
    .first {
      border: 1px solid #6ADEA0;
      font-size: .24rem;
      line-height: .32rem;
      color: #6ADEA0;
      padding: 0 .1rem;
      box-sizing: border-box;
      margin-right: .1rem;
    }
    .second {
      border: 1px solid #5193FF;
      font-size: .24rem;
      line-height: .32rem;
      color: #5193FF;
      padding: 0 .1rem;
      box-sizing: border-box;
      margin-right: .1rem;
    }
  }
  .job-desc {
    width: 100vw;
    padding: 0 .3rem; 
    box-sizing: border-box;
    .desc-title {
      color: #FF986E;
      font-size: .32rem;
      line-height: .6rem;
      margin-top: .2rem;
      letter-spacing: .03rem;
    }
    .des-details {
      font-size: .28rem;
      line-height: .42rem;
      color: #9A9A9A;
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
      width: 2rem;
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
    .save {
      flex: 1;
      line-height: .6rem;
      font-size: .34rem;
      background-image: linear-gradient(to right, #FFB246, #FF8854);
      line-height: .7rem;
      height: .7rem;
      margin-top: .1rem;
      text-align: center;
      color: #fff;
      border-radius: .1rem;
      letter-spacing: .04rem;
    }
  }

</style>