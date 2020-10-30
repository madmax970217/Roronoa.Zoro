<template>
  <div>
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
      <div
        class="show-preview"
        :style="{
          width: previews.w + 'px',
          height: previews.h + 'px',
          overflow: 'hidden',
          margin: '5px',
        }"
      >
        <div :style="previews.div" class="preview">
          <img :src="previews.url" :style="previews.img" />
        </div>
      </div>
    </div>

    <div class="footer-btn">
      <div class="scope-btn">
        <label class="btn" for="uploads">获取证件</label>
        <input
          type="file"
          id="uploads"
          style="position:absolute; clip:rect(0 0 0 0);"
          accept="image/png, image/jpeg, image/gif, image/jpg"
          @change="uploadImg($event, 1)"
        />

        <button @click="changeScale(1)">+</button>
        <button @click="changeScale(-1)">-</button>
        <button @click="rotateLeft">↺</button>
        <button @click="rotateRight">↻</button>
      </div>
      <div class="upload-btn">
        <button @click="down('blob')">下载</button>
      </div>
    </div>
  </div>
</template>
<script>
import { VueCropper } from "vue-cropper";
export default {
  data() {
    return {
      dialogVisible: false,
      crap: false,
      previews: {},
      option: {
        // img:"http://img1.vued.vanthink.cn/vued751d13a9cb5376b89cb6719e86f591f3.png",
        img: "",
        size: 1,
        full: false, //输出原图比例截图 props名full
        outputType: "png",
        canMove: true,
        original: false,
        canMoveBox: true,
        autoCrop: true,
        autoCropWidth: 200,
        autoCropHeight: 200,
        fixedBox: true,
      },
      downImg: "#",
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(() => {
          done();
        })
        .catch(() => {});
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
    //上传图片（点击上传按钮）
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
    },
    // 实时预览函数
    realTime(data) {
      console.log("realTime");
      this.previews = data;
    },
    //下载图片
    down(type) {
      console.log("down");
      var aLink = document.createElement("a");
      aLink.download = "author-img";
      if (type === "blob") {
        this.$refs.cropper.getCropBlob((data) => {
          this.downImg = window.URL.createObjectURL(data);
          aLink.href = window.URL.createObjectURL(data);
          aLink.click();
        });
      } else {
        this.$refs.cropper.getCropData((data) => {
          this.downImg = data;
          aLink.href = data;
          aLink.click();
        });
      }
    },
    //选择本地图片
    uploadImg(e, num) {
      console.log("uploadImg");
      var _this = this;
      //上传图片
      var file = e.target.files[0];
      _this.fileName = file.name;
      if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
        alert("图片类型必须是.gif,jpeg,jpg,png,bmp中的一种");
        return false;
      }
      var reader = new FileReader();
      reader.onload = (e) => {
        let data;
        if (typeof e.target.result === "object") {
          // 把Array Buffer转化为blob 如果是base64不需要
          data = window.URL.createObjectURL(new Blob([e.target.result]));
        } else {
          data = e.target.result;
        }
        if (num === 1) {
          _this.option.img = data;
        } else if (num === 2) {
          _this.example2.img = data;
        }
      };
      // 转化为base64
      reader.readAsDataURL(file);
      // 转化为blob
      reader.readAsArrayBuffer(file);
    },
    imgLoad(msg) {
      console.log("imgLoad");
      console.log(msg);
    },
  },
  components: {
    VueCropper,
  },
};
</script>
<style lang="scss" scoped>
.cropper-content {
  //   display: flex;
  //   display: -webkit-flex;
  //   justify-content: flex-end;
  //   -webkit-justify-content: flex-end;
  .cropper {
    width: 350px;
    height: 300px;
  }
  .show-preview {
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    .preview {
      overflow: hidden;
      border-radius: 50%;
      border: 1px solid #cccccc;
      background: #cccccc;
      margin-left: 40px;
    }
  }
}
.footer-btn {
  margin-top: 30px;
  display: flex;
  display: -webkit-flex;
  justify-content: flex-end;
  -webkit-justify-content: flex-end;
  .scope-btn {
    width: 350px;
    display: flex;
    display: -webkit-flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
  }
  .upload-btn {
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
  }
  .btn {
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
    margin: 0;
    -webkit-transition: 0.1s;
    transition: 0.1s;
    font-weight: 500;
    padding: 8px 15px;
    font-size: 12px;
    border-radius: 3px;
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
  }
}
</style>
