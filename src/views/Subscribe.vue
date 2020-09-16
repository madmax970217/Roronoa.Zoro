<template>
  <!-- 预约界面 -->
  <div class="basic">
    <div class="subForm">
      <div class="photo">
        <span class="title">图像信息</span>
        <el-divider></el-divider>
        <el-upload action="#" list-type="picture-card" :auto-upload="false" :limit="1">
          <i slot="default" class="el-icon-plus"></i>
          <div slot="file" slot-scope="{ file }">
            <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
            <span class="el-upload-list__item-actions">
              <span
                class="el-upload-list__item-preview"
                @click="handlePictureCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                v-if="!disabled"
                class="el-upload-list__item-delete"
                @click="handleRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>
            </span>
          </div>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过1个</div>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </div>
      <avue-form
        ref="form"
        v-model="obj0"
        :option="subOption"
        @change="Changeinfo"
      >
        <template slot="menuForm">
          <el-button type="primary" @click="handleSubmit">提 交</el-button>
          <el-button @click="handleEmpty">清 空</el-button>
        </template>
      </avue-form>
    </div>
  </div>
</template>

<script>
import { subOption } from "@/js/subscribe.js";
export default {
  name: "subcsribe",
  data() {
    return {
      // 获取头像
      dialogImageUrl: "",
      dialogVisible: false,
      disabled: false,

      obj0: {},
      subOption: subOption,
      imageUrl: "",
    };
  },
  methods: {
    handleEmpty() {
      this.$refs.form.resetForm();
    },
    handleSubmit() {
      this.$refs.form.validate((vaild) => {
        if (vaild) {
          this.$message.success(JSON.stringify(this.obj0));
        }
      });
    },
    Changeinfo() {
      this.$refs.form.clearValidate();
    },
    // 获取头像
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/subscribe.scss";
</style>
