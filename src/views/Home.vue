<template>
  <div>
    <!-- 走马灯 -->
    <div class="carousel">
      <el-carousel :interval="5000">
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
            <el-input class="username" v-model="input" placeholder="请输入账号"></el-input>
            <el-input class="password" v-model="input" placeholder="请输入密码"></el-input>
            <div class="login-menu">
              <a href="#" @click.stop="activeName = 'user'">账号密码</a>
              <a href="#" @click.stop="activeName = 'code'">手机号登录</a>
              <!-- <a href="#" @click.stop="activeName='third'">第三方登录</a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
};
</script>
<style lang="scss" scoped>
@import "@/style/home.scss";
</style>
