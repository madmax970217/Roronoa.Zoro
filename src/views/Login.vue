<template>
  <div class="login">
    <!-- 走马灯 -->
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
            <div class="name">
              <el-input
                class="username"
                v-model="input"
                placeholder="请输入账号"
              >
                <i slot="prefix" class="el-input__icon el-icon-user"></i
              ></el-input>
            </div>
            <div class="pwd">
              <el-input
                class="password"
                v-model="input"
                placeholder="请输入密码"
              >
                <i slot="prefix" class="el-input__icon el-icon-lock"></i>
              </el-input>
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
  name:'login',
  data() {
    return {
      imgs: [
        {
          url: "",
          img: "/images/work.png",
        },
        // {
        //   url: "",
        //   img: "/images/celebrate.png",
        // },
        {
          url: "",
          img: "/images/office.png",
        },
        {
          url: "",
          img: "/images/work1.png",
        },
        {
          url: "",
          img: "/images/contact.png",
        },
      ],
      callleft: 0,
    };
  },
  methods: {
    toHome() {
      this.$router.push('/home')
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/login.scss";
</style>
