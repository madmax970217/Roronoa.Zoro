<template>
<!-- 主页 -->
  <div class="about">
    <div class="top">
      <avue-data-rotate :option="Option"></avue-data-rotate>
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
import { Option, edata, config } from "@/js/home.js";
export default {
  name: "home",
  data() {
    return {
      Option: Option,
      edata: edata,
      config: config,
    };
  },
  methods: {
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
            color: ["#79baf5", "#4174bc"],
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
