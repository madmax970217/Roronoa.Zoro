<template>
  <div class="ant-upload-preview">
    <div style="width: 100%">
      <el-upload
        name="avatar"
        listType="picture-card"
        :showUploadList="false"
        :beforeUpload="beforeUpload"
        :customRequest="function() {}"
        @change="handleChange"
      >
        <img class="upload_img" v-if="imageUrl" :src="imageUrl" alt="avatar" />
        <div v-else>
          <a-icon :type="loading ? 'loading' : 'plus'" />
          <div class="ant-upload-text">上传图片</div>
        </div>
      </el-upload>
    </div>
    <!-- modal -->
    <cropper-modal
      ref="CropperModal"
      :imgType="imgType"
      @cropper-no="handleCropperClose"
      @cropper-ok="handleCropperSuccess"
    ></cropper-modal>
  </div>
</template>
<script>
import CropperModal from "@/views/CropperModal";
export default {
  components: {
    CropperModal,
  },
  props: {
    //图片裁切配置
    options: {
      type: Object,
      default: function() {
        return {
          autoCrop: true, //是否默认生成截图框
          autoCropWidth: 180, //默认生成截图框宽度
          autoCropHeight: 180, //默认生成截图框高度
          fixedBox: false, //是否固定截图框大小 不允许改变
          previewsCircle: true, //预览图是否是原圆形
          title: "修改头像",
        };
      },
    },
    // 上传图片的大小，单位M
    imgSize: {
      type: Number,
      default: 2,
    },
    //图片存储在oss上的上级目录名
    imgType: {
      type: String,
      default: "",
    },
    // 图片地址
    imageUrl: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      loading: false,
      isStopRun: false,
    };
  },

  methods: {
    //从本地选择文件
    handleChange(info) {
      if (this.isStopRun) {
        return;
      }
      this.loading = true;
      const { options } = this;
      this.getBase64(info.file.originFileObj, (imageUrl) => {
        const target = Object.assign({}, options, {
          img: imageUrl,
        });
        this.$refs.CropperModal.edit(target);
      });
    },
    // 上传之前 格式与大小校验
    beforeUpload(file) {
      this.isStopRun = false;
      var fileType = file.type;
      if (fileType.indexOf("image") < 0) {
        this.$message.warning("请上传图片");
        this.isStopRun = true;
        return false;
      }
      const isJpgOrPng =
        file.type === "image/jpeg" ||
        file.type === "image/png" ||
        file.type === "image/jpg";
      if (!isJpgOrPng) {
        this.$message.error("你上传图片格式不正确!");
        this.isStopRun = true;
      }
      const isLtSize = file.size < this.imgSize * 1024 * 1024;
      if (!isLtSize) {
        this.$message.error("图片大小不能超过" + this.imgSize + "MB!");
        this.isStopRun = true;
      }
      return isJpgOrPng && isLtSize;
    },
    //获取服务器返回的地址
    handleCropperSuccess(data) {
      //将返回的数据回显
      this.loading = false;
      this.$emit("crop-upload-success", data);
    },
    // 取消上传
    handleCropperClose() {
      this.loading = false;
      this.$emit("crop-upload-close");
    },
    getBase64(img, callback) {
      const reader = new FileReader();
      reader.addEventListener("load", () => callback(reader.result));
      reader.readAsDataURL(img);
    },
  },
};
</script>

<style lang="less" scoped>
.avatar-upload-wrapper {
  height: 180px;
  width: 100%;
}

.ant-upload-preview {
  background-color: #fff;
  .avatar-uploader > .ant-upload {
    width: 128px;
    height: 128px;
  }
  .ant-upload-select-picture-card i {
    font-size: 32px;
    color: #999;
  }
  .upload_img {
    width: 100%;
  }
  .ant-upload-select-picture-card .ant-upload-text {
    margin-top: 8px;
    color: #666;
  }
}
</style>
