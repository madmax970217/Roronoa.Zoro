<template>
<!-- 抓拍 -->
  <div class="camera-outer">
    <el-button type="primary" @click="dialogVisible = true">获取人像</el-button>
    <el-dialog
      title="获取人像"
      :visible.sync="dialogVisible"
      width="45%"
      :before-close="handleClose"
    >
      <!--开启摄像头-->
      <el-button class="button" type="primary" @click="callCamera">开启摄像头</el-button>
      <!--关闭摄像头-->
      <el-button class="button" type="primary" @click="closeCamera">关闭摄像头</el-button>
      <el-button class="button" type="primary" @click="photograph">拍照</el-button>
      <!--图片展示-->
      <video ref="video" autoplay></video>
      <!--canvas截取流-->
      <canvas ref="canvas"></canvas>
      <!--确认-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: "import",
  data() {
    return {
      dialogVisible: false,
    };
  },
  methods: {
    // 调用摄像头
    callCamera() {
      // H5调用电脑摄像头API
      navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then((success) => {
          // 摄像头开启成功
          this.$refs["video"].srcObject = success;
          // 实时拍照效果
          this.$refs["video"].play();
        })
        .catch(() => {
          console.error("摄像头开启失败，请检查摄像头是否可用！");
        });
    },
    // 拍照
    photograph() {
      let ctx = this.$refs["canvas"].getContext("2d");
      // 把当前视频帧内容渲染到canvas上
      ctx.drawImage(this.$refs["video"], 0, 0, 240, 150);
      // 转base64格式、图片格式转换、图片质量压缩
      let imgBase64 = this.$refs["canvas"].toDataURL("image/jpeg", 0.7); // 由字节转换为KB 判断大小

      let str = imgBase64.replace("data:image/jpeg;base64,", "");
      let strLength = str.length;
      let fileLength = parseInt(strLength - (strLength / 8) * 2); // 图片尺寸  用于判断
      let size = (fileLength / 1024).toFixed(2);
      console.log(size); // 上传拍照信息  调用接口上传图片 .........

      // 保存到本地
      // let ADOM = document.createElement("a");
      // ADOM.href = this.headImgSrc;
      // ADOM.download = new Date().getTime() + ".jpeg";
      // ADOM.click();
    },
    // 关闭摄像头
    closeCamera() {
      if (!this.$refs["video"].srcObject) return;
      let stream = this.$refs["video"].srcObject;
      let tracks = stream.getTracks();
      tracks.forEach((track) => {
        track.stop();
      });
      this.$refs["video"].srcObject = null;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/style/import.scss";
</style>
