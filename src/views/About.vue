<template>
<el-container>
  <el-aside width="15%">
    <el-row class="tac">
  <el-col :span="24">
    <el-menu
      class="el-menu-vertical-demo"
      active-text-color="#36be64"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-user-solid"></i>
          <span>信息管理</span>
        </template>
        <el-menu-item-group>
          <template slot="title">个人中心</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-s-custom"></i>
        <span slot="title">访客管理</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-picture"></i>
        <span slot="title" @click="ToWalking">走马灯</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</el-row>
  </el-aside>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
  </el-container>
</el-container>
</template>

<script>
  export default {
    name:'about',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      ToWalking(){
        this.$router.push({
          name:'走马灯'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "@/style/about.scss";
</style>
