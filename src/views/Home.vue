<template>
  <div class="about">
    <div class="left">
      <img src="images/bg.png" alt="" />
      <el-row class="tac">
        <el-col :span="24">
          <el-menu
            class="menu"
            active-text-color="#3f3d56"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1">
              <i class="iconfont icon-home"></i>
              <span slot="title" @click="toHome">主页</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="iconfont icon-tongji"></i>
              <span slot="title" @click="ToWalking">统计</span>
            </el-menu-item>

            <el-menu-item index="3">
              <i class="iconfont icon-upload"></i>
              <span slot="title">上传</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="iconfont icon-setting"></i>
              <span>设置</span>
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
      <div class="welcome">欢迎进入银河系观光指南</div>
      <div class="tip">
        <el-button
          type="text"
          style="color:#3f3d56"
          icon="el-icon-message-solid"
          >消息</el-button
        >
        <el-button type="text" style="color:#3f3d56" icon="el-icon-user-solid"
          >超级管理员</el-button
        >
      </div>
    </div>
    <div class="top">
      <avue-data-tabs :option="Option"></avue-data-tabs>
    </div>
    <div id="myChart"></div>
    <div class="echart">
      <avue-echart-wordcloud
        ref="echart"
        :option="config"
        :data="edata"
      ></avue-echart-wordcloud>
    </div>
  </div>
</template>

<script>
import { Option, edata } from "@/js/home.js";
export default {
  name: "home",
  data() {
    return {
      Option: Option,
      edata:edata,
      config: {
        minFontSize: 30,
        maxFontSize: 80,
        split: 30,
        rotate: true,
      },
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    ToWalking() {
      this.$router.push({
        name: "走马灯",
      });
    },
    toHome() {
      this.$router.push("/home");
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
        dataset: {
          source: [
            ["score", "amount", "product"],
            [89.3, 58212, "Matcha Latte"],
            [57.1, 78254, "Milk Tea"],
            [74.4, 41032, "Cheese Cocoa"],
            [50.1, 12755, "Cheese Brownie"],
            [89.7, 20145, "Matcha Cocoa"],
            [68.1, 79146, "Tea"],
            [19.6, 91852, "Orange Juice"],
            [10.6, 101852, "Lemon Juice"],
            [32.7, 20112, "Walnut Brownie"],
          ],
        },
        grid: { containLabel: true },
        xAxis: { name: "amount" },
        yAxis: { type: "category" },
        visualMap: {
          orient: "horizontal",
          left: "center",
          min: 10,
          max: 100,
          text: ["High Score", "Low Score"],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ["#D7DA8B", "#E15457"],
          },
        },
        series: [
          {
            type: "bar",
            encode: {
              // Map the "amount" column to X axis.
              x: "amount",
              // Map the "product" column to Y axis
              y: "product",
            },
          },
        ],
      });
    },
  },
  mounted() {
    this.drawLine();
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/home.scss";
</style>
