<template>
  <!-- 左侧菜单+顶部 -->
  <div class="about">
    <div class="left">
      <img src="images/bg.png" alt />
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            class="menu"
            active-text-color="#3f3d56"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1" @click="toHome">
              <i class="iconfont icon-home"></i>
              <span slot="title">主页</span>
            </el-menu-item>
            <el-menu-item index="2" @click="toSubscribe">
              <i class="iconfont icon-yiliaohangyedeICON-"></i>
              <span slot="title">访客预约</span>
            </el-menu-item>

            <el-menu-item index="3" @click="toFun">
              <i class="iconfont icon-guanli"></i>
              <span slot="title">部门管理</span>
            </el-menu-item>
            <el-menu-item index="4" @click="toInfo">
              <i class="iconfont icon-guanli"></i>
              <span slot="title">获取人像</span>
            </el-menu-item>
            <el-menu-item index="4" @click="toImport">
              <i class="iconfont icon-guanli"></i>
              <span slot="title">抓拍</span>
            </el-menu-item>
            <el-menu-item index="5" @click="toMenu1">
              <i class="iconfont icon-guanli"></i>
              <span slot="title">远程搜索</span>
            </el-menu-item>
            <el-menu-item index="6" @click="toCapture">
              <i class="iconfont icon-guanli"></i>
              <span slot="title">图片裁剪</span>
            </el-menu-item>
            <el-menu-item index="7" @click="toPhoto">
              <i class="iconfont icon-guanli"></i>
              <span slot="title">裁剪</span>
            </el-menu-item>
            <el-menu-item index="8" @click="toShuttle">
              <i class="iconfont icon-guanli"></i>
              <span slot="title">穿梭框</span>
            </el-menu-item>
            <el-menu-item index="9" @click="toUpload">
              <i class="iconfont icon-guanli"></i>
              <span slot="title">图片上传</span>
            </el-menu-item>
            <el-menu-item index="10" @click="toCropper">
              <i class="iconfont icon-guanli"></i>
              <span slot="title">VueCropper</span>
            </el-menu-item>
            <el-menu-item index="10" @click="toMap">
              <i class="iconfont icon-guanli"></i>
              <span slot="title">坐标选择器</span>
            </el-menu-item>
            <el-menu-item index="10" @click="toRegion">
              <i class="iconfont icon-guanli"></i>
              <span slot="title">区域坐标</span>
            </el-menu-item>
            <el-menu-item index="10" @click="toVerification">
              <i class="iconfont icon-guanli"></i>
              <span slot="title">滑动验证</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="hi">
      <img
        src="images/astronaut.png"
        width="50px"
        height="50px"
        style="float:left;margin-left:15px"
      />
      <div class="welcome animated rubberBand">欢迎进入银河系观光指南</div>
      <div class="tip">
        <el-button
          type="text"
          style="color:#3f3d56"
          icon="el-icon-message-solid"
        ></el-button>
        <el-button type="text" style="color:#3f3d56">
          超级管理员
          <i class="el-icon-caret-bottom"></i>
        </el-button>
        <el-button type="text" style="color:#3f3d56">
          <i class="el-icon-s-tools"></i>
        </el-button>
      </div>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "navigation",
  data() {
    return {};
  },
  props: ["menuType"],
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toHome() {
      this.$router.push("/home");
    },
    toSubscribe() {
      // this.$router.push({
      //   name: "走马灯",
      // });
      this.$router.push("/subscribe");
    },
    toFun() {
      this.$router.push("/fun");
    },
    toInfo() {
      this.$router.push("/info");
    },
    toImport() {
      this.$router.push("/import");
    },
    toMenu1() {
      this.$router.push("/menu1");
    },
    toCapture() {
      this.$router.push("/capture");
    },
    toPhoto() {
      this.$router.push("/photo");
    },
    toShuttle() {
      this.$router.push("/shuttle");
    },
    toUpload() {
      this.$router.push("/upload");
    },
    toCropper() {
      this.$router.push("/cropper");
    },
    toMap() {
      this.$router.push("/map");
    },
    toRegion() {
      this.$router.push("/region");
    },
    toVerification() {
      this.$router.push("/verification");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/navigation.scss";
</style>
