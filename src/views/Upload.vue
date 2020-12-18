<template>
  <!-- 图片上传 -->
  <div class="basic">
    <div class="avatar">
      <img :src="previews.url" style="width:100px;height:100px" />
    </div>
    <img
      v-if="attach.laterUrl"
      :src="attach.laterUrl"
      class="preview"
      style="width:200px;height:200px"
    />
    <el-button @click="dialogVisible = true" class="up">上传头像</el-button>

    <!-- 弹出层-裁剪 -->
    <el-dialog :visible.sync="dialogVisible" :before-close="handleClose">
      <span>
        <el-row>
          <label class="btn" for="uploads">本地上传</label>
          <!-- <input
            type="file"
            id="uploads"
            accept="image/png, image/jpeg, image/gif, image/jpg"
            @change="uploadImg($event, 1)"
            class="el-button"
            style="margin-bottom:15px"
          /> -->
          <input
            type="file"
            id="uploads"
            accept="image/png, image/jpeg, image/gif, image/jpg"
            style="position:absolute; clip:rect(0 0 0 0);"
            @change="uploadImg($event, 1)"
          />
        </el-row>
        <el-row>
          <el-col :span="14">
            <!-- 裁剪 -->
            <vueCropper
              style="width:100%;height:300px"
              ref="cropper"
              :img="attach.customaryUrl"
              :autoCrop="options.autoCrop"
              :fixedBox="options.fixedBox"
              :canMoveBox="options.canMoveBox"
              :autoCropWidth="options.autoCropWidth"
              :autoCropHeight="options.autoCropHeight"
              :centerBox="options.centerBox"
              @realTime="realTime"
            >
            </vueCropper>
          </el-col>
          <el-col :span="8">
            <h3>图片预览：</h3>
            <div class="show-preview">
              <div :style="previews.div" class="preview">
                <img :src="previews.url" :style="previews.img" />
                <!-- <img :src="attach.laterUrl" :style="previews.img" /> -->
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row class="footerBtn" align="center">
          <el-button type="primary" size="small" @click="changeScale(1)"
            >放大</el-button
          >
          <el-button type="primary" size="small" @click="changeScale(-1)"
            >缩小</el-button
          >
          <el-button type="primary" size="small" @click="rotateLeft"
            >旋转</el-button
          >
          <!-- <el-button type="primary" size="small" @click="rotateRight">↻</el-button> -->
          <el-button type="primary" size="small" @click="cut('blob')"
            >确认</el-button
          >
          <el-button type="primary" size="small" @click="handleClose"
            >取消</el-button
          >
        </el-row>
      </span>
    </el-dialog>
  </div>
</template>

<script>
//数据库里需要存两份图片地址，一张为原图地址，一张为裁剪后的头像地址
export default {
  data() {
    return {
      dialogVisible: false,
      options: {
        autoCrop: true, //默认生成截图框
        fixedBox: false, //固定截图框大小
        canMoveBox: true, //截图框不能拖动
        autoCropWidth: 300, //截图框宽度
        autoCropHeight: 200, //截图框高度
        centerBox: false, //截图框被限制在图片里面
        fixed: true,
        fixedNumber: [1, 1],
      },
      previews: {}, //实时预览图数据
      attach: {
        //后端附件表
        id: "",
        userId: "",
        customaryUrl: "", //原图片路径
        laterUrl: "", //裁剪后图片路径  /static/logo.png
        attachType: "photo", //附件类型
      },
      fileName: "", //本机文件地址
      uploadImgRelaPath: "", //上传后图片地址
    };
  },
  methods: {
    //控制弹出层关闭
    handleClose() {
      this.dialogVisible = false;
    },
    //实时预览
    realTime(data) {
      this.previews = data;
    },
    //加载头像信息
    find() {
      this.userId = sessionStorage.getItem("userId");
      this.$axios.post("/api/attach/find", this.attach).then((res) => {
        console.log(res);
      });
    },
    //选择本地图片
    // uploadImg(e, num) {
    uploadImg(e) {
      var file = e.target.files[0];
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        this.$message.error("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      console.log(e.target.result);
      //fileReader 接口，用于异步读取文件数据
      var reader = new FileReader();
      reader.readAsDataURL(file); //重要 以dataURL形式读取文件
      reader.onload = (e) => {
        // data = window.URL.createObjectURL(new Blob([e.target.result])) 转化为blob格式

        let data = e.target.result;

        this.attach.customaryUrl = data;
        // 转化为base64
        // reader.readAsDataURL(file);
        // 转化为blob
      };
    },
    //放大/缩小
    changeScale(num) {
      console.log("changeScale");
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    //左旋转
    rotateLeft() {
      console.log("rotateLeft");
      this.$refs.cropper.rotateLeft();
    },
    //右旋转
    rotateRight() {
      console.log("rotateRight");
      this.$refs.cropper.rotateRight();
    },
    //确认截图,上传
    // cut(type) {
    cut() {
      this.dialogVisible = false;
      var formData = new FormData();
      this.$refs.cropper.getCropBlob((res) => {
        //res是裁剪后图片的bolb对象
        formData.append("file", res, this.userId);
        this.$axios
          .put("/api/attach/upload", formData, {
            contentType: false,
            processData: false,
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((res) => {
            console.log(res);
          });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.basic {
  // display: flex;
  justify-content: center;
  margin-top: 15px;
  .avatar {
    float: left;
    width: 100px;
    height: 100px;
    border: 1px solid #409eff;
  }
  .el-col-8 {
    margin-left: 50px;
  }
  .el-dialog {
    width: 45%;
  }
  /deep/.el-dialog__body {
    padding: 5px 20px 30px;
  }
  /* 弹性布局 水平居中 */
  .show-preview {
    // display: flex;
    justify-content: center;
    width: 300px;
    height: 200px;
    border: 1px solid rgb(122, 121, 121);
    margin-top: 30px;
  }

  .preview {
    // border-radius: 50%;
    overflow: hidden;
    // border: 1px solid #cccccc;
    border: 1px solid rgb(122, 121, 121);
    background: #cccccc;
  }
  .footerBtn {
    justify-content: center;
    margin-top: 15px;
  }
  .btn {
    float: left;
    margin-top: 0;
    margin-bottom: 10px;
    outline: none;
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    // margin: 0;
    -webkit-transition: 0.1s;
    transition: 0.1s;
    font-weight: 500;
    padding: 10px 15px;
    font-size: 12px;
    // border-radius: 3px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
  }
}
</style>
