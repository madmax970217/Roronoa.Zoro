<template>
  <!-- 获取人像 -->
  <div>
    <div id="allmap"></div>
    <p>返回北京市矩形框区域范围内的“银行”关键字的检索结果，并展示在地图上</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        imageUrl: "",
      },
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
        imageUrl: [{ required: true, message: "请上传图片", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      let vm = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          vm.$refs.upload.submit();
        } else {
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
      this.ruleForm.imageUrl = "";
    },

    // handleChange(file, fileList) {
    handleChange(file) {
      this.ruleForm.imageUrl = URL.createObjectURL(file.raw);
    },

    // beforeUpload(file) {
    beforeUpload() {
      return true;
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/info.scss";
</style>
