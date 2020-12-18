<template>
  <div class="basic">
    <div :style="previews.div" class="preview">
      <!-- <img :src="this.downImg" :style="previews.img" /> -->
      <!-- <img :src="img" style="width:100px;height:60px" /> -->
      <!-- <img :src="this.modelSrc" style="width:100px;height:60px" /> -->
    </div>
    <el-button type="primary" @click="dialogVisible = true" class="up"
      >获取证件</el-button
    >
    <!-- 弹出层-裁剪 -->
    <el-dialog :visible.sync="dialogVisible" :before-close="handleClose">
      <label class="btn" for="uploads">本地上传</label>
      <input
        type="file"
        id="uploads"
        style="position:absolute; clip:rect(0 0 0 0);"
        accept="image/png, image/jpeg, image/gif, image/jpg"
        @change="uploadImg($event, 1)"
      />
      <div class="cropper-content">
        <div class="cropper">
          <vueCropper
            ref="cropper"
            :img="option.img"
            :outputSize="option.size"
            :outputType="option.outputType"
            :info="true"
            :full="option.full"
            :canMove="option.canMove"
            :canMoveBox="option.canMoveBox"
            :original="option.original"
            :autoCrop="option.autoCrop"
            :autoCropWidth="option.autoCropWidth"
            :autoCropHeight="option.autoCropHeight"
            :fixedBox="option.fixedBox"
            @realTime="realTime"
            @imgLoad="imgLoad"
          ></vueCropper>
        </div>
        <!-- <div
          class="show-preview"
          :style="{
            width: previews.w + 'px',
            height: previews.h + 'px',
            overflow: 'hidden',
            margin: '5px',
          }"
        > -->
        <div class="show-preview">
          <div :style="previews.div" class="preview">
            <img :src="previews.url" :style="previews.img" />
          </div>
        </div>
      </div>

      <div class="footer-btn">
        <div class="scope-btn">
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
        </div>
        <div class="upload-btn">
          <!-- <button @click="down('blob')">下载</button> -->
          <el-button type="primary" size="small" @click="down('blob')"
            >确定</el-button
          >
          <el-button size="small" @click="handleClose">取消</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { VueCropper } from "vue-cropper";
export default {
  data() {
    return {
      modelSrc:"",
      dialogVisible: false,
      crap: false,
      previews: {}, //实时预览图数据
      option: {
        img:
          "http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png",
        size: 1,
        full: false, //输出原图比例截图 props名full
        outputType: "png",
        canMove: true,
        canMoveBox: true, //截图框不能拖动
        original: false,
        autoCrop: true, //默认生成截图框
        autoCropWidth: 300, //截图框宽度
        autoCropHeight: 200, //截图框高度
        fixedBox: false, //固定截图框大小
        fixed: true,
        fixedNumber: [1, 2],
        centerBox: true, //截图框被限制在图片里面
      },
      //   downImg: "#",
      downImg: "/images/photo.png", //裁剪后图片路径
    };
  },
  methods: {
    //控制弹出层关闭
    handleClose() {
      this.dialogVisible = false;
    },
    changeScale(num) {
      num = num || 1;
      this.$refs.cropper.changeScale(num);
    },
    rotateLeft() {
      this.$refs.cropper.rotateLeft();
    },
    rotateRight() {
      this.$refs.cropper.rotateRight();
    },
    finish(type) {
      // 输出 //
      var test = window.open("about:blank");
      test.document.body.innerHTML = "图片生成中..";
      if (type === "blob") {
        this.$refs.cropper.getCropBlob((data) => {
          var img = window.URL.createObjectURL(data);
          this.model = true;
          this.modelSrc = img;
        });
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.model = true;
          this.modelSrc = data;
        });
      }
      console.log("modelSrc",this.modelSrc)
    },
    // 实时预览函数
    realTime(data) {
      this.previews = data;
    },
    down(type) {
      this.dialogVisible = false;
      event.preventDefault();
      var aLink = document.createElement("a");
      aLink.download = "author-img";
      // 输出
      if (type === "blob") {
        this.$refs.cropper.getCropBlob((data) => {
          console.log(data);
          this.downImg = window.URL.createObjectURL(data);
          //   aLink.download = this.downImg;
          console.log(this.downImg);
          //   console.log("aLink.download", aLink.download);
          //   aLink.href = window.URL.createObjectURL(data);
          //   aLink.click();
        });
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.downImg = data;
          //   aLink.href = data;
          //   aLink.click();
        });
      }

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
    uploadImg(e, num) {
      //上传图片 //
      this.option.img;
      var file = e.target.files[0];
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      var reader = new FileReader();
      reader.readAsDataURL(file); //重要 以dataURL形式读取文件
      reader.onload = (e) => {
        let data = e.target.result;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        if (num === 1) {
          this.option.img = data;
        } else if (num === 2) {
          this.example2.img = data;
        }
      };
      // 转化为base64 //
      //reader.readAsDataURL(file);
      // 转化为blob
      //reader.readAsArrayBuffer(file);
    },
    imgLoad(msg) {
      console.log(msg);
    },
  },
  components: { VueCropper },
};
</script>
<style lang="scss" scoped>
.basic {
  /deep/.el-dialog {
    width: 40%;
    .btn {
      float: left;
      margin-top: -40px;
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
      -webkit-transition: 0.1s;
      transition: 0.1s;
      font-weight: 500;
      padding: 10px 15px;
      font-size: 12px;
      border-radius: 4px;
      color: #fff;
      background-color: #409eff;
      border-color: #409eff;
    }
  }
  /deep/.el-dialog__body {
    padding: 45px 55px 30px;
    width: 500px;
    height: 450px;
    .footer-btn {
      float: left;
      width: 500px;
      margin-top: 30px;
      .scope-btn {
        float: left;
      }
      .upload-btn {
        float: right;
        margin-right: -150px;
        //   margin-left: 200px;
        // flex: 1;
        // -webkit-flex: 1;
        // display: flex;
        // display: -webkit-flex;
        // justify-content: center;
        // -webkit-justify-content: center;
      }
    }
  }
  .cropper-content {
    //   display: flex;
    float: left;
    display: -webkit-flex;
    justify-content: flex-end;
    -webkit-justify-content: flex-end;
    .cropper {
      width: 350px;
      height: 300px;
    }
    .show-preview {
      justify-content: center;
      width: 350px;
      height: 300px;

      .preview {
        overflow: hidden;
        border-radius: 0%;
        border: 1px solid #cccccc;
        background: #cccccc;
        margin-left: 40px;
      }
    }
  }
}
</style>
