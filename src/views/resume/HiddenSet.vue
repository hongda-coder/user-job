<template>
  <div class="hiddren">
    <h2 class="title">屏蔽公司</h2>
    <div class="lists">
      <div class="flex">
        <div class="name">广州市志在信息科技有限公司</div>
        <div class="close">
          <img src="./images/close.png" alt />
        </div>
      </div>
            <div class="flex">
        <div class="name">广州市志在信息科技有限公司</div>
        <div class="close">
          <img src="./images/close.png" alt />
        </div>
      </div>
            <div class="flex">
        <div class="name">广州市志在信息科技有限公司</div>
        <div class="close">
          <img src="./images/close.png" alt />
        </div>
      </div>
            <div class="flex">
        <div class="name">广州市志在信息科技有限公司</div>
        <div class="close">
          <img src="./images/close.png" alt />
        </div>
      </div>
            <div class="flex">
        <div class="name">广州市志在信息科技有限公司</div>
        <div class="close">
          <img src="./images/close.png" alt />
        </div>
      </div>
            <div class="flex">
        <div class="name">广州市志在信息科技有限公司</div>
        <div class="close">
          <img src="./images/close.png" alt />
        </div>
      </div>

    </div>

    <div class="footer">
      <div class="back" @click="back">返回</div>
      <div class="save">新增企业</div>
    </div>
  </div>
</template>

<script >
export default {
  name: "HiddenSet",
  methods: {
    back() {
      this.$router.push("/mine");
    }
  }
};
</script>

<style lang="scss" scoped>
.hiddren {
    width: 100%;
    .title {
        line-height: .8rem;
        font-size: .34rem;
        color: #333333;
        padding-left: .3rem;
        box-sizing: border-box;
    }
    .lists {
        width: 6.9rem;
        margin: 0 auto 1.2rem auto;
        .flex {
            display: flex;
            justify-content: space-between;
            line-height: .8rem;
            border-bottom: 0.02rem solid #f5f5f5;
            .name {
                font-size: .28rem;
                color: #9a9a9a;
            }
            .close {
                width: .2rem;
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    width: 100%;
                    display: block;
                }
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
}

</style>