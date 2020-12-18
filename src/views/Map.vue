<template>
  <!-- 坐标选择 -->
  <div>
    <addressSelection></addressSelection>
  </div>
</template>
<script>
import addressSelection from "@/views/AddressSelection";

export default {
  name: "map",
  data() {
    return {
      visible: false,
      storeLocation: [],
    };
  },
  methods: {
    onSearch(e) {
      this.visible = true;
      console.log(e);
    },
    onClose() {
      this.visible = false;
    },
    handleOk(e) {
      this.visible = false;
      console.log(e);
    },
    point(e) {
      console.log(e);
      this.storeLocation = [e.lng, e.lat];
    },
  },
  components: {
    addressSelection,
  },
};
</script>
<style lang="scss" scoped>
#allmap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  font-family: "微软雅黑";
}
.tangram-suggestion-main {
  display: flex;
  position: absolute;
  left: 164px;
  top: 143px;
  width: 300px;
}
</style>
