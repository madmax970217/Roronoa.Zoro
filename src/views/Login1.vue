<template>
  <div class="login">
    <!-- 银河走马灯 -->
    <div class="carousel">
      <el-carousel :interval="5000" indicator-position="none">
        <el-carousel-item v-for="(img, index) in imgs" :key="index">
          <img :src="img.img" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 登录框 -->
    <div class="login-container">
      <div class="login-weaper animated bounceInDown">
        <div class="login-border">
          <div class="login-main">
            <div class="top">
              <el-button type="text" style="color:#606266;font-size:12px"
                >注册</el-button
              >
              <el-button type="text" style="color:#606266;font-size:12px"
                >找回密码</el-button
              >
            </div>
            <div class="name">
              <el-input
                class="username"
                v-model="username"
                placeholder="请输入账号"
              >
                <i slot="prefix" class="el-input__icon el-icon-user"></i
              ></el-input>
            </div>
            <div class="pwd">
              <el-input class="password" v-model="pwd" placeholder="请输入密码">
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>

              <slide-verify
                :l="42"
                :r="10"
                :w="270"
                :h="155"
                class="slide"
                @success="onSuccess"
                @fail="onFail"
                @refresh="onRefresh"
                :slider-text="text"
              ></slide-verify>
            </div>
            <el-button @click="toHome">登录</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login1",
  data() {
    return {
      username: "",
      pwd: "",
      imgs: [
        {
          url: "",
          img: "/images/space1.png",
        },
        // {
        //   url: "",
        //   img: "/images/celebrate.png",
        // },
        {
          url: "",
          img: "/images/space2.png",
        },
        {
          url: "",
          img: "/images/space3.png",
        },
        {
          url: "",
          img: "/images/space4.png",
        },
      ],
      callleft: 0,
      msg: "",
      text: "向右拖动滑块完成拼图",
    };
  },
  methods: {
    toHome() {
      this.$router.push("/home");
    },
    onSuccess() {
      this.msg = "成功";
    },
    onFail() {
      this.msg = "";
      this.onRefresh();
    },
    onRefresh() {
      this.msg = "";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/login1.scss";
.slide{
  margin-top: 20px;
}
</style>
