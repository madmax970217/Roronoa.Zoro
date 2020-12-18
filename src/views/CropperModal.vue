<template>
  <el-modal
    :visible="visible"
    :title="options.title"
    :maskClosable="false"
    :confirmLoading="confirmLoading"
    :width="800"
    @cancel="cancelHandel"
  >
    <el-row>
      <el-col :xs="24" :md="12" :style="{ height: '350px' }">
        <vue-cropper
          ref="cropper"
          :img="options.img"
          :info="true"
          :autoCrop="options.autoCrop"
          :autoCropWidth="options.autoCropWidth"
          :autoCropHeight="options.autoCropHeight"
          :fixedBox="options.fixedBox"
          @realTime="realTime"
        >
        </vue-cropper>
      </el-col>
      <el-col :xs="24" :md="12" :style="{ height: '350px' }">
        <div
          :class="
            options.previewsCircle
              ? 'avatar-upload-preview'
              : 'avatar-upload-preview_range'
          "
        >
          <img :src="previews.url" :style="previews.img" />
        </div>
      </el-col>
    </el-row>
    <template slot="footer">
      <el-button key="back" @click="cancelHandel">取消</el-button>
      <el-button
        key="submit"
        type="primary"
        :loading="confirmLoading"
        @click="okHandel"
        >保存</el-button
      >
    </template>
  </el-modal>
</template>
<script>
import { UpPic } from "@/js/index";
export default {
  name: "CropperModal",
  data() {
    return {
      visible: false,
      img: null,
      confirmLoading: false,

      options: {
        img: "", //裁剪图片的地址
        autoCrop: true, //是否默认生成截图框
        autoCropWidth: 180, //默认生成截图框宽度
        autoCropHeight: 180, //默认生成截图框高度
        fixedBox: true, //是否固定截图框大小 不允许改变
        previewsCircle: true, //预览图是否是原圆形
        title: "修改头像",
      },
      previews: {},
      url: {
        upload: "/sys/common/saveToImgByStr",
      },
    };
  },

  props: {
    //图片存储在oss上的上级目录名
    imgType: {
      type: String,
      default: "",
    },
  },
  methods: {
    edit(record) {
      const { options } = this;
      this.visible = true;
      this.options = Object.assign({}, options, record);
    },
    /**
     * 取消截图
     */
    cancelHandel() {
      this.confirmLoading = false;
      this.visible = false;
      this.$emit("cropper-no");
    },
    /**
     * 确认截图
     */
    okHandel() {
      const that = this;
      that.confirmLoading = true;
      // 获取截图的base64 数据
      this.$refs.cropper.getCropData((data) => {
        UpPic({
          img_type: this.imgType,
          img_byte: data,
        })
          .then((res) => {
            that.$emit("cropper-ok", res);
          })
          .catch((err) => {
            that.$message.error(err);
          })
          .finally(() => {
            that.cancelHandel();
          });
      });
    },
    //移动框的事件
    realTime(data) {
      this.previews = data;
    },
  },
};
</script>

<style lang="less" scoped>
.avatar-upload-preview_range,
.avatar-upload-preview {
  position: absolute;
  top: 50%;
  transform: translate(50%, -50%);
  width: 180px;
  height: 180px;
  border-radius: 50%;
  box-shadow: 0 0 4px #ccc;
  overflow: hidden;
  img {
    background-color: red;
    height: 100%;
  }
}
.avatar-upload-preview_range {
  border-radius: 0;
}
</style>
