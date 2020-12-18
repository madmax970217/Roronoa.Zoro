<template>
  <!-- 获取人像 -->
  <div class="upload-image">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name" style="width: 300px"></el-input>
      </el-form-item>
      <el-form-item label="上传图片" ref="uploadElement" prop="imageUrl">
        <el-input v-model="ruleForm.imageUrl" v-if="false"></el-input>
        <el-upload
          class="avatar-uploader"
          ref="upload"
          :show-file-list="false"
          action="/index/upload"
          :before-upload="beforeUpload"
          :on-change="handleChange"
          :auto-upload="false"
          :data="ruleForm"
        >
          <img
            v-if="ruleForm.imageUrl"
            :src="ruleForm.imageUrl"
            class="avatar"
          />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
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
