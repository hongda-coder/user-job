<template>
  <div>
    <div>
      <div class="list">
        <div class="job-item">
          <div class="job-top">
            <div class="name">前端工程师</div>
            <div class="salary">6k-10k</div>
          </div>
          <div class="job-req">
            <div class="address">
              <span>广州天河</span>
              <span>1-3年</span>
              <span>本科</span>
            </div>
            <div class="time">2020-08-09 11:20</div>
          </div>
        </div>
        <div class="job-item">
          <div class="job-top">
            <div class="name">前端工程师</div>
            <div class="salary">6k-10k</div>
          </div>
          <div class="job-req">
            <div class="address">
              <span>广州天河</span>
              <span>1-3年</span>
              <span>本科</span>
            </div>
            <div class="time">2020-08-09 11:20</div>
          </div>
        </div>
        <div class="job-item">
          <div class="job-top">
            <div class="name">前端工程师</div>
            <div class="salary">6k-10k</div>
          </div>
          <div class="job-req">
            <div class="address">
              <span>广州天河</span>
              <span>1-3年</span>
              <span>本科</span>
            </div>
            <div class="time">2020-08-09 11:20</div>
          </div>
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
  name: "CompanyInfo",
  methods: {
    back() {
      this.$router.push("/company");
    }
  }
};
</script>

<style lang="scss" scoped>
.list {
  width: 100vw;
  padding: 0 0.3rem;
  box-sizing: border-box;
  padding-bottom: 0.1rem;
  &:last-of-type {
    margin-bottom: 1.2rem;
  }
  .job-item {
    position: relative;
    padding: 0.2rem 0;
    box-sizing: border-box;
    .job-top {
      display: flex;
      justify-content: space-between;
      line-height: 0.6rem;
      .name {
        color: #323232;
        font-size: 0.32rem;
      }
      .salary {
        font-size: 0.28rem;
        color: #ff3636;
      }
    }
    .job-req {
      display: flex;
      justify-content: space-between;
      position: relative;
      .address {
        display: flex;
        span {
          display: block;
          font-size: 0.28rem;
          color: #9a9a9a;
          margin-right: 0.4rem;
          position: relative;
          &:last-of-type {
            &::after {
              background: transparent;
            }
          }
          &::after {
            position: absolute;
            display: block;
            content: "";
            width: 0.02rem;
            height: 0.28rem;
            background: #ccc;
            top: 0;
            right: -0.2rem;
          }
        }
      }
      .time {
        color: #9a9a9a;
        font-size: 0.28rem;
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