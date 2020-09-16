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
            <el-menu-item index="2" @click="ToSubscribe">
              <i class="iconfont icon-yiliaohangyedeICON-"></i>
              <span slot="title">访客预约</span>
            </el-menu-item>

            <el-menu-item index="3">
              <i class="iconfont icon-guanli"></i>
              <span slot="title">部门管理</span>
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
    ToSubscribe() {
      // this.$router.push({
      //   name: "走马灯",
      // });
      this.$router.push("/subscribe");
    },
    toHome() {
      this.$router.push("/home");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/navigation.scss";
</style>
