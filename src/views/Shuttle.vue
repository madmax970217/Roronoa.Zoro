<template>
  <div>
    <div>123</div>
    <avue-form :option="option" v-model="form"></avue-form>
  </div>
</template>
<script
  type="text/javascript"
  src="https://webapi.amap.com/maps?v=1.4.11&key=7ab53b28352e55dc5754699add0ad862&plugin=AMap.PlaceSearch"
></script>
<script src="https://webapi.amap.com/ui/1.0/main.js?v=1.0.11"></script>
<script>
export default {
  data() {
    return {
      // form: {
      // map: [
      //   113.10235504165291,
      //   41.03624227495205,
      //   "内蒙古自治区乌兰察布市集宁区新体路街道顺达源广告传媒",
      // ],
      // },
      option: {
        column: [
          {
            label: "坐标",
            prop: "map",
            type: "map",
            //高德初始化参数
            params: {
              zoom: 10,
              zoomEnable: false,
              dragEnable: false,
            },
          },
          {
            label: "字段",
            prop: "mduan",
            change: ({ value, column }) => {
              this.$message.success("改变");
              console.log("值改变", value, column);
            },
            click: ({ value, column }) => {
              this.$message.success("点击");
              console.log("点击事件", value, column);
            },
            focus: ({ value, column }) => {
              this.$message.success("聚焦");
              console.log("获取焦点", value, column);
            },
            blur: ({ value, column }) => {
              this.$message.success("失焦");
              console.log("失去焦点", value, column);
            },
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
// @import "@/style/shuttle.scss";
</style>
