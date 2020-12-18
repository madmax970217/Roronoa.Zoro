<template>
  <!-- 滑动验证 -->
  <div>
    <slide-verify
      :l="42"
      :r="10"
      :w="310"
      :h="155"
      class="slide"
      @success="onSuccess"
      @fail="onFail"
      @refresh="onRefresh"
      :slider-text="text"
    ></slide-verify>
    <div>{{ msg }}</div>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      msg: "",
      text: "向右拖动滑块",
    };
  },
  methods: {
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
.slide {
  float: left;
  margin-left: 100px;
}
</style>
