<template>
  <div class="login">
    <!-- 工作走马灯 -->
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
            </div>
            <Vcode
                :imgs="[
                  img1,
                  img2,
                  img3,
                  img4,
                  img5,
                  img6,
                  img7,
                  img8,
                  img9,
                  img10,
                ]"
                :show="isShow"
                :canvasWidth="canvasWidth"
                :canvasHeight="canvasHeight"
                @success="success"
                @fail="fails"
                @close="closeRe"
              />
            <el-button @click="toLogin1">登录</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vcode from "vue-puzzle-vcode"; //页面内引用插件
import img1 from "../../public/images/1.jpg";
import img2 from "../../public/images/2.jpg";
import img3 from "../../public/images/3.jpg";
import img4 from "../../public/images/4.jpg";
import img5 from "../../public/images/5.jpg";
import img6 from "../../public/images/6.jpg";
import img7 from "../../public/images/7.jpg";
import img8 from "../../public/images/8.jpg";
import img9 from "../../public/images/9.jpg";
import img10 from "../../public/images/10.jpg";
export default {
  name: "login",
  data() {
    return {
      username: "",
      pwd: "",
      imgs: [
        {
          url: "",
          img: "/images/work.png",
        },
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
      isShow: true, // 用来控制显示是否显示图片滑动验证框
      photoHua: 0, //图片滑动验证的错误次数
      //自定义图片的验证部分（返回值部分）
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      img8,
      img9,
      img10,
    };
  },
  components: {
    Vcode,
  },
  methods: {
    toLogin1() {
      this.$router.push("/login1");
    },
    success() {
      this.isShow = false;
      console.log("success");
    },
    //失败的回调，失败的逻辑是，用户失败指定次数之后，加入弹窗提示信息
    fails() {
      this.photoHua += 1;
      if (this.photoHua > 5) {
        this.$message({
          message: "加油呀~",
          type: "warning",
        });
      }
    },

    //点击图片验证的背景部分事件
    closeRe() {
      this.$message({
        message: "请完成滑动验证",
        type: "warning",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/login.scss";
</style>
