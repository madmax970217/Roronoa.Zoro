<template>
<div>
  <avue-form :option="option" v-model="form" > </avue-form>
</div>
</template>
<script>
import { form,option } from "@/js/info";
export default {
  name:"info",
  data() {
    return {
      form,
      option,
    };
  },
  mounted() {
    // window.topy = this.topy;
  },
  methods: {
    submit() {
      this.$message.success('当前数据' + JSON.stringify(this.form))
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/info.scss";
</style>
