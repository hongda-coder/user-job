<template>
  <div>
    <div>
      <!-- 头部 -->
      <div class="list">
        <div class="compnay-info">
          <div class="logo">
            <img src="../../assets/images/company-logo.png" alt />
          </div>
          <div class="info">
            <div class="name">广州市志在信息科技...</div>
            <div class="nature">
              <span>民营企业</span>
              <span>少于50人</span>
              <span>互联网公司</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 公司介绍 -->
      <div class="instruction">
        <div class="title">
          <img src="./images/title.png" alt />公司介绍
        </div>
        <p class="desc">
          广州市志在信息科技有限公司主营业务包括人力资源招聘服务、
          人力资源服务外包、人力资源管理咨询服务、猎头服务，企业互联网化升级服务等，
          持有人力资源服务许可证，是一家具有互联网特色的人才服务企业。 志在科技了解企业对人
          才的迫切渴望，通过专业的服务
          、系统的解决方案，始终致力于为关注人才、珍惜人才的企业提供可行的解决方案...
        </p>
      </div>

      <!-- 职位福利 -->
      <div class="instruction">
        <div class="title">
          <img src="./images/title.png" alt />职位福利
        </div>
        <div class="welf">
          <div class="green">福利标签</div>
          <div class="skyle">福利标签</div>
          <div class="green">福利标签</div>
        </div>
      </div>

      <!-- 办公地址 -->
      <div class="instruction">
        <div class="title">
          <img src="./images/title.png" alt />办公地址
        </div>
        <p class="desc">广州市海珠区蚝壳街17号“1号汇创”A座203a</p>
      </div>

      <!-- 办公地址 -->
      <div class="instruction">
        <div class="title">
          <img src="./images/title.png" alt />乘车路线
        </div>
        <p class="desc">位于广州市海珠区蚝壳街17号“1号汇创”A座203a（广佛线石溪地铁站B出口）</p>
      </div>
    </div>

    <div class="footer">
      <div class="back" @click="back">返回</div>
      <div class="save" @click="toRecruit">在招职位（10）</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CompanyInfo",
  methods: {
    back() {
      this.$router.push("./info/read");
    },
    // 去在招职位
    toRecruit() {
      console.log("7777");
      this.$router.push("/recruit");
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  width: 100vw;
  padding: 0 0.3rem;
  box-sizing: border-box;
  border-bottom: 0.2rem solid #f5f5f5;
  padding-bottom: 0.1rem;
  &:last-of-type {
    margin-bottom: 1.2rem;
  }
  .compnay-info {
    display: flex;
    position: relative;
    padding-bottom: 0.1rem;
    box-sizing: border-box;
    .logo {
      width: 1rem;
      margin-right: 0.2rem;
      margin-top: 0.3rem;
      img {
        display: block;
        width: 100%;
      }
    }
    .info {
      width: 5rem;
      .name {
        font-size: 0.28rem;
        color: #323232;
        margin-top: 0.3rem;
      }
      .nature {
        line-height: 0.6rem;
        display: flex;
        flex-wrap: nowrap;
        position: relative;
        span {
          display: block;
          font-size: 0.28rem;
          color: #9a9a9a;
          position: relative;
          margin-right: 0.2rem;
          &:last-of-type {
            &::after {
              background: transparent;
            }
          }
          &::after {
            position: absolute;
            top: 0.18rem;
            right: -0.1rem;
            content: "";
            width: 0.03rem;
            height: 0.23rem;
            background: #ccc;
          }
        }
      }
    }
  }
}
.instruction {
  width: 100vw;
  padding: 0 0.3rem;
  box-sizing: border-box;
  .title {
    font-size: 0.32rem;
    color: #323232;
    margin: 0.2rem 0;
    letter-spacing: 0.04rem;
    img {
      width: 0.24rem;
      height: 0.24rem;
      margin-right: 0.2rem;
    }
  }
  .desc {
    font-size: 0.28rem;
    color: #666666;
    line-height: 0.42rem;
  }
  .welf {
    display: flex;
    div {
      padding: 0 0.2rem;
      font-size: 0.24rem;
      line-height: 0.32rem;
      border: 1px solid;
      margin-right: 0.2rem;
    }
    .green {
      border-color: #6adea0;
      color: #6adea0;
    }
    .skyle {
      border-color: #6ba2fd;
      color: #6ba2fd;
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
    width: 2rem;
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
  .save {
    flex: 1;
    line-height: 0.6rem;
    font-size: 0.34rem;
    background-image: linear-gradient(to right, #ffb246, #ff8854);
    line-height: 0.7rem;
    height: 0.7rem;
    margin-top: 0.1rem;
    text-align: center;
    color: #fff;
    border-radius: 0.1rem;
    letter-spacing: 0.04rem;
  }
}
</style>